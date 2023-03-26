import React from 'react'
import { useDispatch } from 'react-redux'
import { showMore } from '../../redux/actions/TicketsActions'
import styles from './ShowMore.module.scss'

function ShowMore() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(showMore())
  }

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      Показать еще 5 билетов!
    </button>
  )
}

export default ShowMore
