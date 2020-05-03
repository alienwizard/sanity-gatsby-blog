import {getBlogUrl} from '../web/src/lib/helpers'

const isDraft = id => id.includes('drafts')

export default function resolveProductionUrl(document) {
  console.log(document)
  const {slug, publishedAt} = document

  const blogPath = getBlogUrl(publishedAt, slug)

  console.log('current', slug.current)

  return `https://build-fcf745d5-fabf-4912-b707-b0cf55a05a47.gtsb.io/${blogPath}`
}
