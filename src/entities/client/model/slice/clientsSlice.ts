import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IClient } from '../../index';
import type { ClientStateSchema } from '../../model/types/clientState';

const initialState: ClientStateSchema = {
    clients: [],
};

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setClients: (state, action: PayloadAction<IClient[]>) => {
            state.clients = action.payload;
        },
        clearClients: (state) => {
            state.clients = [];
        },
    },
});

export const {reducer: clientsReducer, actions: clientsActions } = clientsSlice