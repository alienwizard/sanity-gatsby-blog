import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {toPlainText} from '../lib/helpers'
import Pattern from '../components/pattern/pattern'

export const query = graphql`
  query PatternTemplateQuery($id: String!) {
    pattern: sanityPattern(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      _rawDetails(resolveReferences: {maxDepth: 5})
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`

interface Props {
  data: any
  errors: any[]
}

const PatternTemplate = (props: Props) => {
  const {data, errors} = props
  const pattern = data && data.pattern
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {pattern && (
        <SEO
          title={pattern.title || 'Untitled'}
          description={toPlainText(pattern._rawExcerpt)}
          image={pattern.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {pattern && (
        <Container>
          <Pattern {...pattern} />
        </Container>
      )}
    </Layout>
  )
}

export default PatternTemplate
