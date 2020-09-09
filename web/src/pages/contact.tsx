import React from 'react'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import PortableText from '../components/portableText'

export const query = graphql`
  query ContactPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    sanityPage(slug: {current: {eq: "contact"}}) {
      _rawBody(resolveReferences: {maxDepth: 10})
    }
  }
`

export default function contact(props) {
  const {data, errors, _rawBody} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <div>{_rawBody && <PortableText blocks={_rawBody} />}</div>
      </Container>
    </Layout>
  )
}
