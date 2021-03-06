import React, {ReactElement} from 'react'
import {imageUrlFor} from '../../lib/image-url'
import {buildImageObj} from '../../lib/helpers'
import Slideshow from '../gallery/slideshow'
import PortableText from '../portableText'

interface Props {
  _rawBody: any
  _rawDetails: any
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
  images,
  _rawDetails
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
        {_rawDetails && <PortableText blocks={_rawDetails} />}
      </div>
      <div>{_rawBody && <PortableText blocks={_rawBody} />}</div>
    </article>
  )
}
