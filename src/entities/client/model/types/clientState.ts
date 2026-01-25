import { type IClient } from '@/entities/client/model/types/client';

export type ClientStateSchema = {
    clients: IClient[];
    status: String | null;
    error: String | null;
};
