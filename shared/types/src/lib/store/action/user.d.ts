export interface UserRequestPayload {
  query?: string;
  body?: object;
}

type CallBack = (status: number, response: string | object) => void;

export interface UserSagaTypes {
  requestPayload: UserRequestPayload;
  callBack?: CallBack;
}
