//react
import type { FC } from 'react';
import { Route, Routes } from 'react-router';
//pages
import { HomePage } from '@/pages/home';
//libs
import { getHomeRoute } from '@/shared/libs/constants/routes/routes';

interface AppRouterProps {
    [key: string]: unknown;
}
export const AppRouter: FC<AppRouterProps> = ({}) => {
    return (
        <Routes>
            <Route path={getHomeRoute()} element={<HomePage />} />
        </Routes>
    );
};