import { CHANGE_TAB } from '../types'

const initialState = {
  items: {
    lowCash: 'Самый дешевый',
    fast: 'Самый быстрый',
    optimal: 'Оптимальный',
  },
  selectedKey: 'lowCash',
}

export const TabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        selectedKey: action.key,
      }
    default:
      return state
  }
}
