// react
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// hooks
import { useCreateUser } from '@/features/auth/libs/hooks/useCreateUser'
// styles
import styles from './SignUp.module.scss'

export const SignUp = () => {
    const navigate = useNavigate();
    const { createNewUser } = useCreateUser()
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const onPhoneChange = (value: string) => setPhone(value)
    const onPasswordChange = (value: string) => setPassword(value)

    const clearField = () => {
        setPhone("")
        setPassword("")
        navigate('/signin');
    }

    const onSignUp = () => createNewUser({ phone, password }, clearField)
    return (
        <div className={ styles.authWrapper}>
            <div className={ styles.signUp }>
                <h2> SignUp</h2>
                <input value={ phone } onChange={ e => onPhoneChange(e.target.value) } placeholder='Phone' className={ styles.authInput }  type="text" />
                <input value={ password } onChange={ e => onPasswordChange(e.target.value) } placeholder='password' className={ styles.authInput }  type="text" />
                <button className={ styles.authBtn } onClick={ onSignUp }  type='button'>Send</button>
            </div>
        </div> 
    );
};
