import type { IUser } from '@/entities/user/model/types/user'

export type GetProfileRequest = void;
export type GetProfileResponse = {
    user: IUser;
    ok: boolean;
}
