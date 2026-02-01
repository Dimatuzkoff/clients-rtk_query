//hooks
import { useUpdateClientMutation } from '@/entities/client/api/clientAPI';
// types
import type { IClient } from '@/entities/client/model/types/client'

export const useUpdateClient = () => {
    const [updateClient, result] = useUpdateClientMutation();

    const onUpdateClient = (
        client: IClient,
    ) => {
        const { name, phone, email} = client
        if (!name || !phone || !email) return
        updateClient(client).unwrap().then(() => {
            if (result.isSuccess) console.log('client updated!!');
            if (result.isError) console.log('updated error'); 
        })
    }
    return {
        onUpdateClient,
        ...result,
    }
}