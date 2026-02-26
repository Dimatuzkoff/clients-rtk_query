import type { IUser } from '@/entities/user/model/types/user'

export type GetUserInfoRequest = void;
export type GetUserInfoResponse = {
    user: IUser;
    ok: boolean;
}
