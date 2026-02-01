// react
import type { FC, ChangeEvent } from 'react';
import { useState } from 'react';
// hooks
import { useDeleteClientMutation, useUpdateClientMutation } from '@/entities/client/api/clientAPI';
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
    const [deleteClient, { isSuccess, isError}] = useDeleteClientMutation()
    const [updateClient, { isSuccess: isSuccessUpdate, isError: isErrorUpdate}] = useUpdateClientMutation()
    const [currentName, setCurrentName] = useState(name ?? "");
    const [currentPhone, setCurrentPhone] = useState(phone ?? "");
    const [currentEmail, setCurrentEmail] = useState(email ?? "");

        const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setCurrentName(e.target.value);
        const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setCurrentPhone(e.target.value);
        const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setCurrentEmail(e.target.value);

        const onDeleteClient = () => { deleteClient(_id).unwrap().then(() => {
        if (isSuccess) console.log('client delete!!');
        if (isError) console.log('delete error'); 
    }) };

    const onUpdateClient = () => { updateClient({
        _id,
        name: currentName,
        phone: currentPhone,
        email: currentEmail
    }).unwrap().then(() => {
        if (isSuccessUpdate) console.log('client updated!!');
        if (isErrorUpdate) console.log('updated error'); 
    })}
    return(
        <>
            <div className={styles.client}>
                <h2>Client id № {_id} </h2>
                <div className={styles.clientInfo}>
                    <input type="text" value={currentName} onChange={onChangeName} />
                    <input type="text" value={currentPhone} onChange={onChangePhone} />
                    <input type="text" value={currentEmail} onChange={onChangeEmail} />
                    <div className={styles.clientActions}>
                        <button onClick={onUpdateClient} type="button">Edit</button>
                        <button onClick={onDeleteClient} type="button">🗑️</button>
                    </div>
                </div>
            </div>
        </>
    )
}