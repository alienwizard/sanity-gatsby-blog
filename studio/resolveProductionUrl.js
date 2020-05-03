import {getBlogUrl} from '../web/src/lib/helpers'

const isDraft = id => id.includes('drafts')

export default function resolveProductionUrl (document) {
  console.log(document)
  const {slug, publishedAt} = document

  const blogPath = getBlogUrl(publishedAt, slug)

  console.log('current', slug.current)

  return `https://sanity-gatsby-blog-web-zsmygcks.netlify.app/${blogPath}`
}
