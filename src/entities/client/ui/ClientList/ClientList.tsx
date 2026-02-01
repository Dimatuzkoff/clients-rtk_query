// react
import { type FC } from "react";
// hooks
import { useGetClientsQuery } from '@/entities/client/api/clientAPI'
// ui
import { ClientListItem } from '../ClientListItem/ClientListItem'
// styles
import styles from "./ClientList.module.scss";
// assets
import Loader from '@/shared/libs/assets/svg/preview.gif'

interface ClientListProps {}

export const ClientList: FC<ClientListProps> = ({}) => {

    const { data, isError, isLoading } = useGetClientsQuery();

    if (isError) {
        return <div>Something went wrong!</div>;
    }
    if (isLoading) {
        return <div className={styles.loader}><img src={Loader} alt='loader' /></div>;
    }
    return (
        <div className={styles.clientsList}>
            { 
                data?.map((elem) => (
                    <ClientListItem key={elem._id} client={elem} />
                )) 
            }
        </div>
    );
};
