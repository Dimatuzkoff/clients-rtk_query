// react
import { useParams } from 'react-router';
// styles
import styles from './ClientListItemDetail.module.scss';  
// hooks
import { useGetClientQuery } from '@/entities/client/api/clientAPI';

export const ClientListItemDetail= ({
      
}) => {
    const { id } = useParams<{id: string}>();
    if (!id) {
        return <div>Client ID not found</div>;
    }
    const { data, isError, isLoading } = useGetClientQuery(id);

    if (isError) {
        return <div>Something went wrong!</div>;
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return(
        <>
            <div className={styles.client}>
                <h2> {id} </h2>
            </div>
        </>
    )
}