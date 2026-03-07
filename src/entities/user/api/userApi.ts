// api
import { api } from "@/shared/api/api";
// types
import type { GetUserInfoRequest, GetUserInfoResponse } from '@/entities/user/model/types/userApiTypes'
// store
import { setUser } from '@/entities/user/model/slice/userSlice';

const userInfoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUserInfo: builder.query< GetUserInfoResponse, GetUserInfoRequest >({
            query: () => ({
                url: "/profile",
                method: "GET",
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setUser(data.user));
            },
        }),
    })
})

export const { useGetUserInfoQuery, } = userInfoApi