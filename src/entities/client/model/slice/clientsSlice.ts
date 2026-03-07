import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IClient } from '@/entities/client/model/types/client';
import type { ClientStateSchema } from '@/entities/client/model/types/clientState';

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

export const { setClients, clearClients } = clientsSlice.actions;
export default clientsSlice.reducer;
