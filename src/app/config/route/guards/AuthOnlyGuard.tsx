import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import type { StateSchema } from '@/app/config/store/stateSchema';
import { getSignInRoute } from '@/shared/libs/constants/routes/routes';
import { useGetUserInfoQuery } from '@/entities/user/api/userApi';

export const AuthOnlyGuard: FC = () => {
    const user = useSelector((state: StateSchema) => state.user.user);
    const token = localStorage.getItem('token');

    const { isLoading } = useGetUserInfoQuery(undefined, {
        skip: !token || !!user,
    });

    if (isLoading) return null;

    if (!user) {
        localStorage.removeItem('token');
        return <Navigate to={getSignInRoute()} replace />;
    }

    return <Outlet />;
};
