//react
import type { FC } from 'react';
import { Route, Routes } from 'react-router';
//pages
import { HomePage } from '@/pages/home';
import { ClientPage } from '@/pages/clientPage'
import { SignUpPage } from '@/pages/auth/signUp'
import { ProfilePage } from '@/pages/profile'
import { SignInPage } from '@/pages/auth/signIn'
//libs
import { getHomeRoute, getSignUpRoute, getSignInRoute, getProfileRoute, getClientPageRoute } from '@/shared/libs/constants/routes/routes';

interface AppRouterProps {
    [key: string]: unknown;
}
export const AppRouter: FC<AppRouterProps> = ({}) => {
    return (
        <Routes>
            <Route path={getHomeRoute()} element={<HomePage />} />
            <Route path={getSignUpRoute()} element={<SignUpPage />} />
            <Route path={getSignInRoute()} element={<SignInPage />} />
            <Route path={getProfileRoute()} element={<ProfilePage />} />
            <Route path={getClientPageRoute()} element={<ClientPage />} />
        </Routes>
    );
};