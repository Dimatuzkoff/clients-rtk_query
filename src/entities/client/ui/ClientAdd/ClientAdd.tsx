// react
import { useState } from 'react';
//hooks
import { useCreateClient } from '@/entities/client/libs/hooks/useCreateClient';
// styles
import styles from './ClientAdd.module.scss';

export const ClientAdd = () => {
    const { createNewClient } = useCreateClient()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const onNameChange = (value: string) => setName(value)
    const onPhoneChange = (value: string) => setPhone(value)
    const onEmailChange = (value: string) => setEmail(value)

    const clearField = () => {
        setName("")
        setPhone("")
        setEmail("")
    }

    const onCreateClient = () => createNewClient( { name, phone, email }, clearField)
    
    return(
        <>
            <div className={ styles.clientAdd }>
                <input value={ name } onChange={ e => onNameChange(e.target.value) } placeholder='Name' className={ styles.clientAddInput }  type="text" />
                <input value={ phone } onChange={ e => onPhoneChange(e.target.value) } placeholder='Phone' className={ styles.clientAddInput }  type="text" />
                <input value={ email } onChange={ e => onEmailChange(e.target.value) } placeholder='Email' className={ styles.clientAddInput }  type="text" />
                <button className={ styles.clientAddBtn } onClick={ onCreateClient }  type='button'>ADD</button>
            </div>
        </>
    )
}