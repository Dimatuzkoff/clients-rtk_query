import { configureStore } from '@reduxjs/toolkit'

import { api } from '@/shared/api/api'
import { userReducer } from '@/entities/user/model/slice/userSlice'
import clientsReduser from '@/entities/client/model/slice/clientsSlice'

export const createReduxStore = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userReducer,
        clients: clientsReduser,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(api.middleware),
})

export type AppDispatch = typeof createReduxStore.dispatch;