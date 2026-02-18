// api
import { api } from '@/shared/api/api'
// types
import type {
    PostRegisterRequest,
    PostRegisterResponse
} from '@/features/auth/model/types/authApiTypes'

const authAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation< PostRegisterResponse, PostRegisterRequest >({
            query: (newUser) => ({
                url: "/register",
                method: "POST",
                body: newUser
            }),
        }),
        
    })
})

export const { useCreateUserMutation } = authAPI