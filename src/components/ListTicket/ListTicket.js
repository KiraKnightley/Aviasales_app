import React from 'react'
import { sortBy } from 'lodash'
import { useSelector } from 'react-redux'
import styles from './ListTicket.module.scss'
import CardTicket from '../CardTicket'
import ShowMore from '../ShowMore'

function ListTicket() {
  const { tickets, countToView } = useSelector((state) => state.TicketsReducer)
  const { selectedKey } = useSelector((state) => state.TabsReducer)
  const filters = useSelector((state) => {
    return Object.values(state.FilterReducer).reduce((newArr, item) => {
      if (item.countStops !== undefined && item.checked) {
        newArr.push(item.countStops)
      }
      return newArr
    }, [])
  })
  const filtrArr = tickets.filter((el) => {
    return el.segments[0].stops.length === el.segments[1].stops.length && filters.includes(el.segments[0].stops.length)
  })

  const sortArr = sortBy(filtrArr, [
    (o) => {
      return selectedKey === 'fast' ? o.segments[0].duration + o.segments[1].duration : o.price
    },
  ])

  const arrToView = sortArr.slice(0, countToView)
  return (
    <>
      <ul className={styles.listTicket}>
        {arrToView.map((ticket, index) => (
          <CardTicket key={index} ticket={ticket} />
        ))}
      </ul>
      {arrToView.length ? <ShowMore /> : <span>Рейсов, подходящих под заданные фильтры, не найдено</span>}
    </>
  )
}

export default ListTicket
