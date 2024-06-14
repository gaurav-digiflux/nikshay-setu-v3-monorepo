import { combineReducers } from 'redux';
import userReducer from './user.reducers';
export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer: any = combineReducers({
  user: userReducer,
});
