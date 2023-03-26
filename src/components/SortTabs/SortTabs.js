import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tab from '../Tab'
import { changeTab } from '../../redux/actions/TabsActions'
import styles from './SortTabs.module.scss'

function SortTabs() {
  const dispatch = useDispatch()
  const { items, selectedKey } = useSelector((state) => state.TabsReducer)
  const arrTabs = Object.entries(items)

  const handleClick = (key) => {
    dispatch(changeTab(key))
  }
  return (
    <ul className={styles.sortTabs}>
      {arrTabs.map((item) => (
        <Tab key={item[0]} label={item[1]} selected={selectedKey === item[0]} onClick={() => handleClick(item[0])} />
      ))}
    </ul>
  )
}

export default SortTabs
