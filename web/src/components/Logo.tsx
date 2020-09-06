import React, {CSSProperties} from 'react'
import styles from './typography.module.css'
import {Link} from 'gatsby'

const logoStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

function Logo() {
  return (
    <Link to="/">
      <div style={logoStyles} className={styles.logo}>
        <h1 style={{margin: '10px 0 0 0'}}>Clara knits</h1>
      </div>
    </Link>
  )
}

export default Logo
