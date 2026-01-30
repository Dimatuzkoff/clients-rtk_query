//react
import type { FC } from 'react';
import { Route, Routes } from 'react-router';
//pages
import { HomePage } from '@/pages/home';
import { ClientPage } from '@/pages/clientPage'
//libs
import { getHomeRoute, getClientPageRoute } from '@/shared/libs/constants/routes/routes';

interface AppRouterProps {
    [key: string]: unknown;
}
export const AppRouter: FC<AppRouterProps> = ({}) => {
    return (
        <Routes>
            <Route path={getHomeRoute()} element={<HomePage />} />
            <Route path={getClientPageRoute()} element={<ClientPage />} />
        </Routes>
    );
};