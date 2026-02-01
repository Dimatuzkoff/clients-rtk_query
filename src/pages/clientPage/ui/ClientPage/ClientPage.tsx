// react
import { useParams } from 'react-router';
// hooks
import { useGetClientQuery } from '@/entities/client/api/clientAPI';
// components
import { ClientListItemDetail } from '@/entities/client/ui/ClientListItemDetail/ClientListItemDetail'
// styles
import styles from './ClientPage.module.scss';
// assets
import Loader from '@/shared/libs/assets/svg/preview.gif'

export const ClientPage = () => {
    const { id } = useParams<{id: string}>();
    if (!id) {
        return <div className={styles.clientPage}>Client ID not found</div>;
    }
    const { data, isError, isLoading } = useGetClientQuery(id);
    if (isError) {
        return <div className={styles.clientPage}>Something went wrong!</div>;
    }
    return (
        <div className={styles.clientPage}>
            { isLoading ? (<img src={Loader} alt='loader' />) : <ClientListItemDetail client={data}/>}
        </div>
    )
} 