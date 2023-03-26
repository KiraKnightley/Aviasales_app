import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { FilterReducer } from './redusers/FilterRedecer'
import { TicketsReducer } from './redusers/TickersReducer'
import { TabsReducer } from './redusers/TabsReducer'

const rootReducer = combineReducers({
  FilterReducer,
  TicketsReducer,
  TabsReducer,
})

const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
