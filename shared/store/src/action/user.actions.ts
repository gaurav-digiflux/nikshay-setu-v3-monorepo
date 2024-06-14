export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

export function fetchUserRequest(): any {
  return { type: FETCH_USER_REQUEST }
}

export function fetchUserSuccess(payload: any): any {
  return { type: FETCH_USER_SUCCESS, payload }
}

export function fetchUserFailure(error: Error): any {
  return { type: FETCH_USER_FAILURE, error }
}
