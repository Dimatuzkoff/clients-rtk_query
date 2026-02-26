// redux
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

const TOKEN_KEY = 'token';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://shop-back-mh7t.onrender.com/api',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithTokenRotation: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
console.log('result', result);

    const newToken = result.meta?.response?.headers.get('authorization');
    if (newToken) {
        localStorage.setItem(TOKEN_KEY, newToken);
    }

    return result;
};

export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithTokenRotation,
    tagTypes: ['CLIENT', 'AUTH'],
    endpoints: (_builder) => ({})
})