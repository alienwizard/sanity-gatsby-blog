import React from 'react'
import {GatsbyGraphQLType} from 'gatsby'

type PatternPreviewList = {
  nodes: any[]
  browseMoreHref: string
}

export default function PatternPreviewList({nodes}: PatternPreviewList) {
  console.log(nodes)

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}
    >
      {nodes.map(
        ({
          mainImage: {
            asset: {url}
          },
          ...hej
        }) => {
          console.log(hej)

          return (
            <div
              style={{
                margin: '10px',
                width: '600px',
                display: 'flex',
                backgroundSize: 'cover',
                backgroundImage: `url(${url})`,
                backgroundPosition: 'center top',
                flex: '1 1 40%',
                marginBottom: '10px'
              }}
            />
          )
        }
      )}
    </div>
  )
}
