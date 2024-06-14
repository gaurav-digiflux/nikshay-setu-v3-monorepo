import {
  UserResponsePayload,
  UserSagaTypes,
} from '@nikshay-setu-v3-monorepo/types';
import { getUserApi } from '@nikshay-setu-v3-monorepo/utils';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserSuccess } from '../action/user.actions';
import { ActionTypes } from '../actionTypes';

function* fetchUserSaga(action: {
  type: string;
  requestPayload: UserSagaTypes;
}) {
  try {
    const response: UserResponsePayload = yield call(getUserApi);
    // const resExtended = { status: response?.status, response: response.data.data };
    if (response.status === 200) {
      yield put(fetchUserSuccess(response));
    } else {
      if (action?.requestPayload?.callBack) {
        action?.requestPayload?.callBack(400, response.data.data);
      }
    }
  } catch (error) {
    if (action?.requestPayload?.callBack) {
      action?.requestPayload?.callBack(500, 'response.data.data');
    }
    console.log('USER error', error);
  }
}

export function* userSaga() {
  yield takeLatest(ActionTypes.FETCH_USER_REQUEST, fetchUserSaga);
}
