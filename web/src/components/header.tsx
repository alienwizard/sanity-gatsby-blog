import {Link} from 'gatsby'
import React, {CSSProperties} from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const ulStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

const navStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
}

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav style={navStyle} className={cn(styles.nav, showNav && styles.showNav)}>
        <ul style={ulStyle}>
          <li>
            <Link to="/archive/">Home</Link>
          </li>
          <li>
            <Link to="/patterns/">Patterns</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
