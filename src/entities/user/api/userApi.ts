// api
import { api } from "@/shared/api/api";
// types
import type { GetUserInfoRequest, GetUserInfoResponse } from '@/entities/user/model/types/userApiTypes'

const userInfoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUserInfo: builder.query< GetUserInfoResponse, GetUserInfoRequest >({
            query: () => ({
                url: "/profile",
                method: "GET",
            })
        }),
    })
})

export const { useGetUserInfoQuery, } = userInfoApi