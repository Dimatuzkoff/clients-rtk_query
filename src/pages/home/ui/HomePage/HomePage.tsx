// react
import { Link } from 'react-router-dom';
// ui
import { ClientList } from '@/entities/client/ui/ClientList/ClientList'
import { ClientAdd } from '@/entities/client/ui/ClientAdd/ClientAdd'
// libs
import { getProfileRoute } from '@/shared/libs/constants/routes/routes';
// styles
import styles from './HomePage.module.scss';
import clsx from 'clsx';

export const HomePage = () => {
    return (
        <main className={clsx(styles.homePage)}>
            <Link to={ getProfileRoute() }>Профиль</Link>
            <h2>Create client</h2>
            <ClientAdd/>
            <h1>Our clients</h1>
            <ClientList/>
        </main>
    );
};
