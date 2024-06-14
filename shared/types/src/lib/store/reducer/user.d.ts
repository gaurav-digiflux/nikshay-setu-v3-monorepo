import { UserResponsePayload } from '../saga/user';

export interface UserState {
  user: UserResponsePayload | null;
  error: Error | null;
}
