import { configureStore } from '@reduxjs/toolkit'

import { api } from '@/shared/api/api'
import { userReducer } from '@/entities/user/model/slice/userSlice'
import { clientsReducer } from '@/entities/client/model/slice/clientsSlice'

export const createReduxStore = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userReducer,
        clients: clientsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(api.middleware),
})

export type AppDispatch = typeof createReduxStore.dispatch;