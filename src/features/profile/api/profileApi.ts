// api
import { api } from "@/shared/api/api";
// types
import type { GetProfileRequest, GetProfileResponse } from '@/features/profile/model/profileApiTypes'

const profileApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query< GetProfileResponse, GetProfileRequest >({
            query: () => ({
                url: "/profile",
                method: "GET",
            })
        }),
    })
})

export const { useGetProfileQuery, } = profileApi