import {
  HOME_INFO,
  HOME_RECORD
} from '../mutation-types'

import initialState from '../state'

export const homeState = (state = initialState.home, action) => {
  switch (action.type) {
    case HOME_INFO:
      const list = action.subreddit.list;
      return Object.assign({}, state, { list: list })
    case HOME_RECORD:
      const dataRecord = action.subreddit.data;
      return Object.assign({}, state, { recordData: dataRecord } )
    default:
      return state;
  }
}
