import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import {userState} from './user'
import { homeState } from './home'
import initState from '../state.js'

const syncReducers = {
  routing: routerReducer
}

const rootReducer = combineReducers({
  initState,
  syncReducers,
  userState,
  homeState
})

export default rootReducer