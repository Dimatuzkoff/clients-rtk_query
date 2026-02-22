// components
import { SignIn } from '@/features/auth/ui/SignIn/SignIn'
// styles
import styles from './SignInPage.module.scss';

export const SignInPage = () => {

    return (
        <div className={ styles.authWrapper}>
            <SignIn />
        </div> 
    );
};

