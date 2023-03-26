import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tab.module.scss'

function Tab({ label, selected, onClick }) {
  return (
    <li className={`${styles.item} ${selected ? styles.sel : null}`}>
      <button type="button" className={styles.button} onClick={onClick}>
        {label}
      </button>
    </li>
  )
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Tab
