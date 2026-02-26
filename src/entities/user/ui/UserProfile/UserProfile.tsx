// hooks
import { useGetUserInfoQuery } from "@/entities/user/api/userApi"
// styles
import styles from './UserProfile.module.scss';
// assets
import Loader from '@/shared/libs/assets/svg/preview.gif'

export const UserProfile = () => {
    const { data, isError, isLoading } = useGetUserInfoQuery();

    if (isError) {
        return <div>Something went wrong!</div>;
    }
    if (isLoading) {
        return <div><img src={Loader} alt='loader' /></div>;
    }
    return (
        <>
            <main className={styles.userProfile}>
                <h1> {data?.user.phone} </h1>
            </main>
        </>
        
    );
};
