// api
import { api } from '@/shared/api/api'
// store
import { userActions } from '@/entities/user/model/slice/userSlice';
// types
import type {
    PostRegisterRequest,
    PostRegisterResponse,
    PostLoginRequest,
    PostLoginResponse
} from '@/features/auth/model/types/authApiTypes'

const authAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation< PostRegisterResponse, PostRegisterRequest >({
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
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(userActions.setUser(data.user));
            },
        }),
    })
})

export const { useRegisterMutation, useLoginUserMutation } = authAPI