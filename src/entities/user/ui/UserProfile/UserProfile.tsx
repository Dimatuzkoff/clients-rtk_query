// hooks
import { useGetUserInfoQuery } from "@/entities/user"
import { useSelector } from 'react-redux';
// types
import type { StateSchema } from '@/app/config/store/stateSchema';
// styles
import styles from './UserProfile.module.scss';
// assets
import Loader from '@/shared/libs/assets/svg/preview.gif'

export const UserProfile = () => {
    const { isError, isLoading } = useGetUserInfoQuery();
    const user = useSelector((state: StateSchema) => state.user.user);

    if (isError) {
        return <div>Something went wrong!</div>;
    }
    if (isLoading) {
        return <div><img src={Loader} alt='loader' /></div>;
    }
    return (
        <>
            <main className={styles.userProfile}>
                <h1> {user?.phone} </h1>
            </main>
        </>
    );
};
