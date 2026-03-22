import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IUser } from '@/entities/user/model/types/user';
import type { UserStateSchema } from '@/entities/user/model/types/userState';

const initialState: UserStateSchema = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});

export const { reducer: userReducer, actions: userActions} = userSlice
