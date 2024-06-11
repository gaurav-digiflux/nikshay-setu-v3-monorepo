import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "../action/user.actions";

interface UserState {
  user: any | null;
  error: Error | null;
}

const initialState: UserState = {
  user: null,
  error: null,
};

export default function userReducer(state = initialState, action: {type:string,payload:any,error:string}) {
  switch (action?.type) {
    case FETCH_USER_SUCCESS:
      return {...state, user: action.payload, error: null };
    case FETCH_USER_FAILURE:
      return {...state, user: null, error: action.error };
    default:
      return state;
  }
}