import React from 'react'

type PatternsProps = {nodes: any[]}

export default function Patterns({nodes}: PatternsProps) {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'grid',
        gridAutoFlow: 'column'
      }}
    >
      {nodes.map(
        ({
          mainImage: {
            asset: {url}
          },
          ...pattern
        }) => {
          console.log(pattern)
          const {title} = pattern
          return (
            <a
              style={{
                display: 'flex',
                width: '100%',
                cursor: 'pointer'
              }}
              key={title}
            >
              <div
                style={{
                  display: 'flex',
                  flexFlow: 'column',
                  margin: '10px',
                  width: '100%'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`,
                    backgroundPosition: 'center top',
                    flex: '1 1 40%',
                    marginBottom: '10px'
                  }}
                />

                <div>
                  <div>{title}</div>
                </div>
              </div>
            </a>
          )
        }
      )}
    </div>
  )
}
