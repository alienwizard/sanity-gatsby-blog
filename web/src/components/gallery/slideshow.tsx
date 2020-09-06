import React, {ReactElement, useState} from 'react'

interface Props {
  delay: number
  images: string[]
}

export default function Slideshow({delay, images}: Props): ReactElement {
  const [state, setState] = useState(null)
  return (
    <div>
      {images.map((src) => (
        <div key={src} style={{display: 'flex', backgroundImage: `url(${src})`}} />
      ))}
    </div>
  )
}
