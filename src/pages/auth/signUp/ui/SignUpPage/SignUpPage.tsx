// components
import { SignUp } from '@/features/auth/ui/SignUp/SignUp';
// styles
import styles from './SignUpPage.module.scss';

export const SignUpPage = () => {

    return (
        <div className={ styles.authWrapper}>
            <SignUp />
        </div> 
    );
};

