// react
import { type FC } from "react";
import { useSelector } from 'react-redux';
// hooks
import { useGetClientsQuery } from '@/entities/client'
// types
import type { StateSchema } from '@/app/config/store/stateSchema';
// ui
import { ClientListItem } from '../ClientListItem/ClientListItem'
// styles
import styles from "./ClientList.module.scss";
// assets
import Loader from '@/shared/libs/assets/svg/preview.gif'

interface ClientListProps {}

export const ClientList: FC<ClientListProps> = ({}) => {

    const { isError, isLoading } = useGetClientsQuery();
    const clients = useSelector((state: StateSchema) => state.clients.clients);
console.log('clients', clients);

    if (isError) {
        return <div>Something went wrong!</div>;
    }
    if (isLoading) {
        return <div className={styles.loader}><img src={Loader} alt='loader' /></div>;
    }
    return (
        <div className={styles.clientsList}>
            { 
                clients?.map((elem) => (
                    <ClientListItem key={elem._id} client={elem} />
                )) 
            }
        </div>
    );
};
