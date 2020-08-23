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
      <h1>Clara knits</h1>
    </div>
  )
}

export default Logo
