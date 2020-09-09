import React from 'react'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import PortableText from '../components/portableText'
import {graphql} from 'gatsby'

export const query = graphql`
  query ContactPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    contact: sanityPage(slug: {current: {eq: "contact"}}) {
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`

export default function contact(props) {
  console.log('contact', props)

  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const contact = data && (data || {}).contact

  console.log(contact)

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <div>{contact?._rawBody && <PortableText blocks={contact?._rawBody} />}</div>
      </Container>
    </Layout>
  )
}
