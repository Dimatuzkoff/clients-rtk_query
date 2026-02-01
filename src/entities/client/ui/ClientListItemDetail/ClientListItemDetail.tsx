// react
import type { FC, ChangeEvent } from 'react';
import { useState } from 'react';
// hooks
import { useDeleteClientMutation } from '@/entities/client/api/clientAPI';
import { useUpdateClient } from '@/entities/client/libs/hooks/useUpdateClient'
// types
import type { IClient } from '@/entities/client/model/types/client'
// styles
import styles from './ClientListItemDetail.module.scss';  

interface ClientListItemDetail {
    client: IClient
}

export const ClientListItemDetail: FC<ClientListItemDetail> = ({
    client: { _id, name, phone, email }   
}) => {
    const [deleteClient, { isSuccess, isError }] = useDeleteClientMutation()
    const { onUpdateClient } = useUpdateClient()
    const [currentName, setCurrentName] = useState(name ?? "");
    const [currentPhone, setCurrentPhone] = useState(phone ?? "");
    const [currentEmail, setCurrentEmail] = useState(email ?? "");

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setCurrentName(e.target.value);
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setCurrentPhone(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setCurrentEmail(e.target.value);

    const onDeleteClient = () => { deleteClient(_id).unwrap().then(() => {
        if (isSuccess) console.log('client delete!!');
        if (isError) console.log('delete error'); 
    })};

    const onUpdate = () => onUpdateClient({
        _id,
        name: currentName,
        phone: currentPhone,
        email: currentEmail
    })
    return(
        <>
            <div className={styles.client}>
                <h2>Client id № {_id} </h2>
                <div className={styles.clientInfo}>
                    <input type="text" value={currentName} onChange={onChangeName} />
                    <input type="text" value={currentPhone} onChange={onChangePhone} />
                    <input type="text" value={currentEmail} onChange={onChangeEmail} />
                    <div className={styles.clientActions}>
                        <button onClick={onUpdate} type="button">Edit</button>
                        <button onClick={onDeleteClient} type="button">🗑️</button>
                    </div>
                </div>
            </div>
        </>
    )
}