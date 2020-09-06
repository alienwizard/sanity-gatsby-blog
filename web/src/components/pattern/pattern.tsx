import React, {ReactElement} from 'react'
import {imageUrlFor} from '../../lib/image-url'
import {buildImageObj} from '../../lib/helpers'
import Slideshow from '../gallery/slideshow'

interface Props {
  _rawBody: any
  authors: any
  categories: any
  title: string
  mainImage: {
    alt: string
  }
  publishedAt: string
  images: string[]
}

export default function Pattern({
  _rawBody,
  authors,
  categories,
  title,
  mainImage,
  publishedAt,
  images
}: Props): ReactElement {
  console.log(_rawBody, mainImage, images)

  return (
    <article
      style={{
        display: 'grid',
        gridTemplateRows: '2fr 1fr',
        gridTemplateColumns: '2fr 1fr',
        gridGap: '15px'
      }}
    >
      <div style={{overflow: 'hidden'}}>
        <Slideshow mainImage={mainImage} images={images} />
      </div>
      <div>
        <h2 style={{marginTop: 0}}>{title}</h2>
      </div>
    </article>
  )
}
