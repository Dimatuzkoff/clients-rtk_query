import type { IAuth } from './auth'

export type PostRegisterRequest = IAuth

export type PostRegisterResponse = {
    ok: boolean;
    message: string;
}