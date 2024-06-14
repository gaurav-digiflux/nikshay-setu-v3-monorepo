import { combineReducers } from 'redux'
import userReducer from './user.reducers'

export const rootReducer: any = combineReducers({
  user: userReducer,
})
