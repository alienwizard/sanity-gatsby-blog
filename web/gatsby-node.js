const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')

async function createPatternPages(graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPattern(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  console.log('Create patternPAges')
  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPattern || {}).edges || []

  postEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/pattern/${dateSegment}/${slug.current}/`

      console.log('createpage', path)
      createPage({
        path,
        component: require.resolve('./src/templates/pattern.tsx'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createPatternPages(graphql, actions)
}
