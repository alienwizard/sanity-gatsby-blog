import React from 'react'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {graphql} from 'gatsby'
import PortableText from '../components/portableText'

export const query = graphql`
  query AboutPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    about: sanityPage(slug: {current: {eq: "about"}}) {
      _rawBody(resolveReferences: {maxDepth: 10})
    }
  }
`

export default function about(props) {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const {site} = data
  const about = data && (data || {}).about

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <div>{about?._rawBody && <PortableText blocks={about?._rawBody} />}</div>
      </Container>
    </Layout>
  )
}
