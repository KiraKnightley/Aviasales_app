import { SELECT_FILTER, SELECT_ALL_OFF, SELECT_ALL_ON } from '../types'

export const selectFilter = (key, objFilters) => {
  if (key === 'all' && objFilters[key].checked) {
    return { type: SELECT_ALL_OFF }
  }
  if (key === 'all' && !objFilters[key].checked) {
    return { type: SELECT_ALL_ON }
  }
  if (
    key !== 'all' &&
    !objFilters[key].checked &&
    Object.values(objFilters).filter((obj) => obj.checked).length === 3
  ) {
    return { type: SELECT_ALL_ON }
  }

  return {
    type: SELECT_FILTER,
    selectedKey: key,
  }
}
