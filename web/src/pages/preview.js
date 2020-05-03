import React from 'react'
import {graphql, Match, navigate} from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import PreviewTemplate from '../templates/previewTemplate'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
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

  query PreviewPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

export default function PreviewPage (props) {
  const {data, errors} = props

  const site = (data || {}).sites
  return (
    <Layout>
      {/* I use React Helmet to add a meta tag that avoids indexing of this page */}
      {/*
        @reach/router offers a <Match /> component that passes down router-related props
        to a child function. We use this function to either render the template if we're in
        the proper path - and pass the location prop to it -, or navigate to the homepage
      */}
      <Match path='/preview'>
        {props => {
          if (!props.match) {
            navigate('/')
            return null
          } else {
            return <PreviewTemplate location={props.location} />
          }
        }}
      </Match>
    </Layout>
  )
}
