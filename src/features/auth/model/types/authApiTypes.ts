import type { IAuth } from './auth'
import type { IUser } from '@/entities/user/model/types/user'

export type PostRegisterRequest = IAuth
export type PostRegisterResponse = {
    ok: boolean,
    message: string
}

export type PostLoginRequest = IAuth
export type PostLoginResponse = {
    user: IUser,
    ok: boolean
}