//hooks
import { useCreateClientMutation } from '@/entities/client/api/clientAPI';
// types
import type { IClient } from '@/entities/client/model/types/client'

export const useCreateClient = () => {
    const [createClient, result] = useCreateClientMutation();

    const createNewClient = async (
        client: IClient,
        onSuccess: () => void,
    ) => {
        const { name, phone, email} = client
        if (!name || !phone || !email) return
        try {
            await createClient(client).unwrap()
            onSuccess();            
        } catch (error) {
            console.error('created error', error);
        }
    }
    return {
        createNewClient,
        ...result,
    }
}