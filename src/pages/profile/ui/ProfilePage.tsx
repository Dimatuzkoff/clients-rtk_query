// ui
import { UserProfile } from '@/entities/user/ui/UserProfile/UserProfile'
// styles
import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
    return (
        <main className={styles.profile}>
            <UserProfile />
        </main>
    );
};
