import {format, isFuture} from 'date-fns'
import sanityClient from '@sanity/client'
import clientConfig from '../../client-config'

const {
  sanity: {projectId, dataset}
} = clientConfig

const client = sanityClient({
  projectId,
  dataset,
  useCdn: false,
  withCredentials: true
})

export function cn(...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs({slug}) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture({publishedAt}) {
  return !isFuture(publishedAt)
}

export function getBlogUrl(publishedAt, slug) {
  return `/blog/${format(publishedAt, 'YYYY/MM')}/${slug.current || slug}/`
}

export function buildImageObj(source = {asset: {}}) {
  const imageObj = {
    asset: {_ref: source.asset._ref || source.asset._id}
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

export function toPlainText(blocks) {
  if (!blocks) {
    return ''
  }
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

/*
export function fetchDataFromSanity () {
  const query = '*[_type == "bike" && seats >= $minSeats] {name, pages}'
  const params = {pages: 2}

  client.fetch(query, params).then(bikes => {
    console.log('Bikes with more than one seat:')
    bikes.forEach(bike => {
      console.log(`${bike.name} (${bike.seats} seats)`)
    })
  })
}
*/

export function subscribeToBlogUpdates(id, updateState) {
  const query = '*[_type == "pattern" && id != $id]'
  const params = {id}

  const subscription = client.listen(query, params).subscribe(update => {
    const comment = update.result
    console.log(`${comment.author} commented: ${comment.text}`)
  })

  // to unsubscribe later on
  return () => subscription.unsubscribe()
}
