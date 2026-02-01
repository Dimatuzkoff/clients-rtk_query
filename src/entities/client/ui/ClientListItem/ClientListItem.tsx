// react
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// types
import type { IClient } from '@/entities/client/model/types/client'
// styles
import styles from './ClientListItem.module.scss';  

interface ClientListItemProps {
    client: IClient
}
export const ClientListItem: FC<ClientListItemProps> = ({
    client: { _id, name, phone, email }   
}) => {
    return(
        <>
            <Link to={`/client/${_id}`} className={styles.clientItem}>
                <div className={ styles.clientProperty }>
                    <span> Name: </span>
                    <p> { name } </p>
                </div>
                <div className={ styles.clientProperty }>
                    <span> Phone: </span>
                    <p> { phone } </p>
                </div>
                <div className={ styles.clientProperty }>
                    <span> Email: </span>
                    <p> { email } </p>
                </div>
            </Link>
        </>
    )
}