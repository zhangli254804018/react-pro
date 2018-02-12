import {
  USER_INFO
} from '../mutation-types'

import initialState from '../state'

export const userState = (state=initialState.user,action) => {
  switch(action.type){
    case USER_INFO:
      return Object.assign({},state,{
        user:action.data.data
      })
    default:
      return state;
  }
}
