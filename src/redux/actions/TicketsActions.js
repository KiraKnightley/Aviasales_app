import { GET_SEARCH_ID, LOAD_TICKETS, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, ERROR_ON, SHOW_MORE } from '../types'
import { AviaSalesService } from '../../services/serviceAviasales'

function loaderDisplayOn() {
  return {
    type: LOADER_DISPLAY_ON,
  }
}

function loaderDisplayOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  }
}

export const showMore = () => ({
  type: SHOW_MORE,
})

function errorOn(err) {
  return {
    type: ERROR_ON,
    err,
  }
}

export function getSearchId() {
  return async (dispatch) => {
    try {
      const searchId = await AviaSalesService.getSearchId().then(async (id) => id)
      if (searchId) {
        dispatch({
          type: GET_SEARCH_ID,
          searchId,
        })
      }
    } catch (err) {
      dispatch(errorOn(err))
    }
  }
}

export function loadTickets(searchId) {
  return async (dispatch) => {
    try {
      let resArr = []
      dispatch(loaderDisplayOn())

      let stop = false
      do {
        // eslint-disable-next-line no-await-in-loop
        resArr = await AviaSalesService.getTickets(searchId)
          .then((res) => res)
          .catch()
        if (resArr) {
          stop = resArr.stop
          dispatch({
            type: LOAD_TICKETS,
            data: resArr,
          })
        }
      } while (!stop)
      dispatch(loaderDisplayOff())
    } catch (err) {
      dispatch(errorOn(err))
      dispatch(loaderDisplayOff())
    }
  }
}
