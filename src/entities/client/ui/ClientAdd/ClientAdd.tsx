// react
import { useState } from 'react';
//hooks
import { useCreateClientMutation } from '@/entities/client/api/clientAPI';
// styles
import styles from './ClientAdd.module.scss';

export const ClientAdd = () => {
    const [createClient, { isSuccess: isSuccessCreate, isError: isErrorCreate}] = useCreateClientMutation()
    
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const onNameChange = (value: string) => setName(value)
    const onPhoneChange = (value: string) => setPhone(value)
    const onEmailChange = (value: string) => setEmail(value)

    const createNewClient = () => {
        if (!name || !phone || !email) return
        const clientData = { name, phone, email}
        createClient(clientData).unwrap().then(() => {
            if (isSuccessCreate) console.log('client created!!');
            if (isErrorCreate) console.log('created error'); 
        })
        setName("")
        setPhone("")
        setEmail("")
    }
    
    return(
        <>
            <div className={styles.clientAdd}>
                <input value={name} onChange={e => onNameChange(e.target.value)} placeholder='Name' className={styles.clientAddInput}  type="text" />
                <input value={phone} onChange={e => onPhoneChange(e.target.value)} placeholder='Phone' className={styles.clientAddInput}  type="text" />
                <input value={email} onChange={e => onEmailChange(e.target.value)} placeholder='Email' className={styles.clientAddInput}  type="text" />
                <button className={styles.clientAddBtn} onClick={createNewClient}  type='button'>ADD</button>
            </div>
        </>
    )
}