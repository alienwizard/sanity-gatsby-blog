import React, {ReactElement} from 'react'
import {imageUrlFor} from '../../lib/image-url'
import {buildImageObj} from '../../lib/helpers'

interface Props {
  _rawBody: any
  authors: any
  categories: any
  title: string
  mainImage: string
  publishedAt: string
}

export default function Pattern({
  _rawBody,
  authors,
  categories,
  title,
  mainImage,
  publishedAt
}: Props): ReactElement {
  return (
    <article>
      <img
        src={imageUrlFor(buildImageObj(mainImage))
          .width(1200)
          .height(Math.floor((9 / 16) * 1200))
          .fit('crop')
          .auto('format')
          .url()}
        alt={mainImage.alt}
      />
    </article>
  )
}
