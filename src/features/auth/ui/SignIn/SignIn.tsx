// react
import { useState } from 'react';
// hooks
import { useLoginUser } from '@/features/auth/libs/hooks/useLoginUser'
// styles
import styles from './SignIn.module.scss';

export const SignIn = () => {
    const { loginNewUser } = useLoginUser()
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const onPhoneChange = (value: string) => setPhone(value)
    const onPasswordChange = (value: string) => setPassword(value)

    const clearField = () => {
        setPhone("")
        setPassword("")
    }

    const onSignIn = () => loginNewUser({ phone, password }, clearField)
    return (
        <div className={ styles.authWrapper}>
            <div className={ styles.signUp }>
                <h2> SignIn</h2>
                <input value={ phone } onChange={ e => onPhoneChange(e.target.value) } placeholder='Phone' className={ styles.authInput }  type="text" />
                <input value={ password } onChange={ e => onPasswordChange(e.target.value) } placeholder='Email' className={ styles.authInput }  type="text" />
                <button className={ styles.authBtn } onClick={ onSignIn }  type='button'>Send</button>
            </div>
        </div> 
    );
};
