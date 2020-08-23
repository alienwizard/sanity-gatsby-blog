import React from 'react'
import Figure from './Figure'

const serializers = {
  types: {
    authorReference: ({node}: any) => <span>{node.author.name}</span>,
    mainImage: Figure
  }
}

export default serializers
