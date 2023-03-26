import { SELECT_ALL_ON, SELECT_ALL_OFF, SELECT_FILTER } from '../types'

const initialState = {
  all: { label: 'Все', checked: true },
  without: { label: 'Без пересадок', countStops: 0, checked: true },
  one: { label: '1 пересадка', countStops: 1, checked: true },
  two: { label: '2 пересадки', countStops: 2, checked: true },
  three: { label: '3 пересадки', countStops: 3, checked: true },
}

export const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FILTER:
      return {
        ...state,
        [action.selectedKey]: {
          ...state[action.selectedKey],
          checked: !state[action.selectedKey].checked,
        },
        all: { ...state.all, checked: false },
      }
    case SELECT_ALL_ON:
      return {
        ...state,
        all: { ...state.all, checked: true },
        without: { ...state.without, checked: true },
        one: { ...state.one, checked: true },
        two: { ...state.two, checked: true },
        three: { ...state.three, checked: true },
      }
    case SELECT_ALL_OFF:
      return {
        ...state,
        all: { ...state.all, checked: false },
        without: { ...state.without, checked: false },
        one: { ...state.one, checked: false },
        two: { ...state.two, checked: false },
        three: { ...state.three, checked: false },
      }
    default:
      return state
  }
}
