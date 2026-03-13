import type { IUser } from './user'

export type GetUserInfoRequest = void;
export type GetUserInfoResponse = {
    user: IUser;
    ok: boolean;
}
