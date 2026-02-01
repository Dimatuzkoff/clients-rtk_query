//hooks
import { useCreateClientMutation } from '@/entities/client/api/clientAPI';
// types
import type { IClient } from '@/entities/client/model/types/client'

export const useCreateClient = () => {
    const [createClient, result] = useCreateClientMutation();

    const createNewClient = (
        client: IClient,
        onSuccess: () => void,
    ) => {
        const { name, phone, email} = client
        if (!name || !phone || !email) return
        createClient(client).unwrap().then(() => {
            if (result.isSuccess) console.log('client created!!');
            if (result.isError) console.log('created error'); 
        })
        onSuccess();
    }
    return {
        createNewClient,
        ...result,
    }
}