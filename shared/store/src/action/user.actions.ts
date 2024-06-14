import {
  CallBack,
  UserRequestPayload,
  UserResponsePayload,
} from '@nikshay-setu-v3-monorepo/types';
import { ActionTypes } from '../actionTypes';

export function fetchUserRequest(
  requestPayload: UserRequestPayload,
  callBack?: CallBack
) {
  return { type: ActionTypes.FETCH_USER_REQUEST, requestPayload, callBack };
}

export function fetchUserSuccess(responsePayload: UserResponsePayload) {
  return { type: ActionTypes.FETCH_USER_SUCCESS, responsePayload };
}

export function fetchUserFailure(error: Error) {
  return { type: ActionTypes.FETCH_USER_FAILURE, error };
}
