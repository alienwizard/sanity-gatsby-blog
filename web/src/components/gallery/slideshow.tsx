import React, {ReactElement, useState} from 'react'
import {imageUrlFor} from '../../lib/image-url'
import {buildImageObj} from '../../lib/helpers'

interface Props {
  delay?: number
  images: string[]
  mainImage: any
}

const SlideshowDot = () => <div style={{width: '12px', height: '12px', backgroundColor: 'gray'}} />

export default function Slideshow({delay = 4000, images, mainImage}: Props): ReactElement {
  if (images) {
    const [currentImg, setCurrentImg] = useState(images[0])
    return (
      <div>
        <div key={src} style={{display: 'flex', backgroundImage: `url(${currentImg})`}} />
        {images.map((src) => (
          <SlideshowDot key={src} />
        ))}
      </div>
    )
  }

  return (
    <img
      src={imageUrlFor(buildImageObj(mainImage))
        .width(1200)
        .height(Math.floor((9 / 16) * 900))
        .fit('crop')
        .auto('format')
        .url()}
      alt={mainImage.alt}
    />
  )
}
