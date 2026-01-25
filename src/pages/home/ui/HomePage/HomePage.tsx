// ui
import { ClientList } from '@/entities/client/ui/ClientList/ClientList'
import { ClientAdd } from '@/entities/client/ui/ClientAdd/ClientAdd'
// styles
import styles from './HomePage.module.scss';
import clsx from 'clsx';

export const HomePage = () => {
    return (
        <main className={clsx(styles.homePage)}>
            <h2>Create client</h2>
            <ClientAdd/>
            <h1>Our clients</h1>
            <ClientList/>
        </main>
    );
};
