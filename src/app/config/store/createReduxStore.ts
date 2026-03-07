import { configureStore } from '@reduxjs/toolkit'

import { api } from '@/shared/api/api'
import userReducer from '@/entities/user/model/slice/userSlice'

export const createReduxStore = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(api.middleware),
})

export type AppDispatch = typeof createReduxStore.dispatch;