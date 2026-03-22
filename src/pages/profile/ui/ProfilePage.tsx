// react
import { Link } from 'react-router-dom';
// ui
import { UserProfile } from '@/entities/user/ui/UserProfile/UserProfile'
// libs
import { getHomeRoute } from '@/shared/libs/constants/routes/routes';
// styles
import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
    return (
        <main className={styles.profile}>
            <Link className={ styles.backLink } to={ getHomeRoute() }>Главная</Link>
            <UserProfile />
        </main>
    );
};
