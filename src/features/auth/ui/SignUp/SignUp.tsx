// react
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// hooks
import { useRegister } from '@/features/auth'
// libs
import { getSignInRoute } from '@/shared/libs/constants/routes/routes'
// styles
import styles from './SignUp.module.scss'

export const SignUp = () => {
    const navigate = useNavigate();
    const { createNewUser } = useRegister()
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const onPhoneChange = (value: string) => setPhone(value)
    const onPasswordChange = (value: string) => setPassword(value)

    const clearField = () => {
        setPhone("")
        setPassword("")
        navigate(getSignInRoute());
    }

    const onSignUp = () => createNewUser({ phone, password }, clearField)
    return (
        <div className={ styles.authWrapper}>
            <div className={ styles.signUp }>
                <h2> SignUp</h2>
                <input value={ phone } onChange={ e => onPhoneChange(e.target.value) } placeholder='Phone' className={ styles.authInput }  type="text" />
                <input value={ password } onChange={ e => onPasswordChange(e.target.value) } placeholder='password' className={ styles.authInput }  type="text" />
                <button className={ styles.authBtn } onClick={ onSignUp }  type='button'>Send</button>
                <Link to={ getSignInRoute() }>Уже есть аккаунт? Войти</Link>
            </div>
        </div> 
    );
};
