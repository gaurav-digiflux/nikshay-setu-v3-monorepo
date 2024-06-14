import { call, put, takeEvery, select, takeLatest } from 'redux-saga/effects'
import { FETCH_USER_REQUEST, fetchUserSuccess } from '../action/user.actions'
import { getUserApi } from '../../../utils/src'

function* fetchUserSaga(): any {
  try {
    const response = yield call(getUserApi)
    yield put(fetchUserSuccess(response))
    console.log('fetchUserSuccess', response)
  } catch (error) {
    console.log('USER error', error)
  }
}

export function* userSaga(): any {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga)
}
