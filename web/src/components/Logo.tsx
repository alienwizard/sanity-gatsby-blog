import React, {CSSProperties} from 'react'
import styles from './typography.module.css'

const logoStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

function Logo() {
  return (
    <div style={logoStyles} className={styles.logo}>
      <h1 style={{margin: '10px 0 0 0'}}>Clara knits</h1>
    </div>
  )
}

export default Logo
