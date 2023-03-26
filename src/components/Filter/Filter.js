import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/actions/FilterActions'
import styles from './Filter.module.scss'

function Filter() {
  const dispatch = useDispatch()
  const objFilters = useSelector((state) => state.FilterReducer)

  const handleChange = (e) => {
    dispatch(selectFilter(e.target.id, objFilters))
  }

  return (
    <div className={styles.filter}>
      <span className={styles.filter__header}>Колчество пересадок</span>
      <ul className={styles.filter__list}>
        {Object.entries(objFilters).map(([key, value]) => (
          <li key={key} className={styles.filter__item}>
            <label htmlFor={key} className={styles.filter__label}>
              <input
                type="checkbox"
                id={key}
                checked={value.checked}
                className={styles.filter__input}
                onChange={handleChange}
              />
              <span className={styles.filter__checkbox} />
              {value.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
