import React from 'react'
import PropTypes from 'prop-types'
import styles from './FieldWithHead.module.scss'

function FieldWithHead({ header, field }) {
  return (
    <div className={styles.fieldWithHead}>
      <span className={styles.fieldWithHead__header}>{header}</span>
      <span className={styles.fieldWithHead__field}>{field}</span>
    </div>
  )
}

FieldWithHead.propTypes = {
  header: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
}

export default FieldWithHead
