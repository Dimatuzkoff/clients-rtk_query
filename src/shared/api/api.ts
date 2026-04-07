// redux
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

const ACCESS_TOKEN_KEY = 'accessToken';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://shop-back-mh7t.onrender.com/api',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithTokenRotation: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    const newToken = result.meta?.response?.headers.get('authorization');
    if (newToken && newToken !== 'null') {                
        localStorage.setItem(ACCESS_TOKEN_KEY, newToken);
    }

    return result;
};

export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithTokenRotation,
    tagTypes: ['CLIENT', 'AUTH'],
    endpoints: (_builder) => ({})
})