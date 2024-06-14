import { UserState } from '@nikshay-setu-v3-monorepo/types';
import { ActionTypes } from '../actionTypes';

const initialState: UserState = {
  user: null,
  error: null,
};

export default function userReducer(
  action: { type: string; payload: any; error: string },
  state = initialState
) {
  switch (action?.type) {
    case ActionTypes.FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case ActionTypes.FETCH_USER_FAILURE:
      return { ...state, user: null, error: action.error };
    default:
      return state;
  }
}
