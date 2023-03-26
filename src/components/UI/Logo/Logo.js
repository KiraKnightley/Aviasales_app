import React from 'react'
import styles from './Logo.module.scss'
import logo from './Logo.png'

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo
