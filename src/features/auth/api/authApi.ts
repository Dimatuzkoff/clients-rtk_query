// api
import { api } from '@/shared/api/api'
// types
import type {
    PostRegisterRequest,
    PostRegisterResponse,
    PostLoginRequest,
    PostLoginResponse
} from '@/features/auth/model/types/authApiTypes'

const authAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation< PostRegisterResponse, PostRegisterRequest >({
            query: (newUser) => ({
                url: "/register",
                method: "POST",
                body: newUser
            })
        }),
        loginUser: builder.mutation< PostLoginResponse, PostLoginRequest >({
            query: (user) => ({
                url: "/login",
                method: "POST",
                body: user
            })
        }),
    })
})

export const { useCreateUserMutation, useLoginUserMutation } = authAPI