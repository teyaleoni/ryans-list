import { createStore, combineReducers } from 'redux'
import homePageReducer from './reducers/homePageReducer'
// import all reducers here

const rootReducer = combineReducers({
  homePageReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store