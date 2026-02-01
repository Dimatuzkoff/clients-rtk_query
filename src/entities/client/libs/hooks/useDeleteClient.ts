//react
import { useNavigate } from 'react-router-dom';
//hooks
import { useDeleteClientMutation } from '@/entities/client/api/clientAPI';

export const useDeleteClient = () => {
    const [deleteClient, result] = useDeleteClientMutation()
    const navigate = useNavigate();
    const onDeleteClient = async (id: string) => {
        try {
            await deleteClient(id).unwrap();
            navigate('/');
        } catch (error) {
            console.error('delete error', error);
        }
    };
    return {
        onDeleteClient,
        ...result
    }
}