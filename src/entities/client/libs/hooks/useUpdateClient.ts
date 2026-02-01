//hooks
import { useUpdateClientMutation } from '@/entities/client/api/clientAPI';
// types
import type { IClient } from '@/entities/client/model/types/client'

export const useUpdateClient = () => {
    const [updateClient, result] = useUpdateClientMutation();

    const onUpdateClient = async (client: IClient) => {
        const { name, phone, email } = client;
        if (!name || !phone || !email) return;
        try {
            await updateClient(client).unwrap();
        } catch (error) {
            console.error('updated error', error);
        }
    };
    return {
        onUpdateClient,
        ...result,
    }
}