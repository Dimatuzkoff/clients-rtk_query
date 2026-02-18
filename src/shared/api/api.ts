// redux
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shop-back-mh7t.onrender.com/api'
    }),
    tagTypes: ['CLIENT', 'AUTH'],
    endpoints: (_builder) => ({})
})