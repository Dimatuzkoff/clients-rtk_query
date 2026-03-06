//react
import { useNavigate } from 'react-router-dom';
//hooks
import { useDeleteClientMutation } from '@/entities/client/api/clientAPI';
// libs
import { getHomeRoute } from '@/shared/libs/constants/routes/routes'

export const useDeleteClient = () => {
    const [deleteClient, result] = useDeleteClientMutation()
    const navigate = useNavigate();
    
    const onDeleteClient = async (id: string) => {
        try {
            await deleteClient(id).unwrap();
            navigate(getHomeRoute());
        } catch (error) {
            console.error('delete error', error);
        }
    };
    return {
        onDeleteClient,
        ...result
    }
}