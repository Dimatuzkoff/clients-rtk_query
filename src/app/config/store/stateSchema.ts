import type { ClientStateSchema } from "@/entities/client/model/types/clientState";

export interface StateSchema {
    clients: ClientStateSchema;
}