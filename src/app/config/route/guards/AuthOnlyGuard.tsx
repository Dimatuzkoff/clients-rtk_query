import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import type { StateSchema } from '@/app/config/store/stateSchema';
import { getSignInRoute } from '@/shared/libs/constants/routes/routes';

export const AuthOnlyGuard: FC = () => {
    const user = useSelector((state: StateSchema) => state.user.user);

    if (!user) {
        localStorage.removeItem('token');
        return <Navigate to={getSignInRoute()} replace />;
    }

    return <Outlet />;
};
