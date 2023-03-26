import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTickets, getSearchId } from '../../redux/actions/TicketsActions'
import styles from './app.module.scss'
import './global.scss'

import ListTicket from '../ListTicket'
import SortTabs from '../SortTabs'
import Filter from '../Filter'
import Spinner from '../UI/Spinner'
import Logo from '../UI/Logo/Logo'

function App() {
  const dispatch = useDispatch()
  const { searchId, isLoading, isError } = useSelector((state) => state.TicketsReducer)

  useEffect(() => {
    dispatch(getSearchId())
  }, [])

  useEffect(() => {
    if (typeof searchId === 'string') {
      dispatch(loadTickets(searchId))
    }
  }, [searchId])

  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <Logo />
      </div>
      <div className={styles.app__wrapper}>
        <aside className={styles.app__left}>
          <Filter />
        </aside>
        <main className={styles.app__main}>
          {isError ? <span>Что то пошло не так. {isError}</span> : null}
          <SortTabs />
          <Spinner isLoading={isLoading} />
          {/* {countSelectedFilters ? null : <span>Не выбраны фильтры</span>} */}
          <ListTicket />
        </main>
      </div>
    </div>
  )
}

export default App
