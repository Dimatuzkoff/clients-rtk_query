import type { ClientStateSchema } from "@/entities/client/model/types/clientState";
import type { UserStateSchema } from "@/entities/user/model/types/userState";

export interface StateSchema {
    clients: ClientStateSchema;
    user: UserStateSchema;
}