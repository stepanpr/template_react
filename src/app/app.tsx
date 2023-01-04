import React, { Suspense, lazy, ComponentType } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import Layout from 'widgets/Layout/Layout';
import { Routes, Route, redirect, BrowserRouter } from 'react-router-dom';
import Spinner from 'shared/ui/Spinner/Spinner';

import { useMediaQueries } from '../shared/lib/useMediaQueries';

export const ROUTES = {
    MAIN: '/',
    ALL: '*',
};

const App = () => {
    const mediaQueries = useMediaQueries();

    const lazyMinLoadTime = <T extends ComponentType<any>>(
        factory: () => Promise<{ default: T }>,
        minLoadTimeMs = 300
    ) =>
        lazy(() =>
            Promise.all([
                factory(),
                new Promise((resolve) => setTimeout(resolve, minLoadTimeMs)),
            ]).then(([moduleExports]) => moduleExports)
        );

    const Main = lazyMinLoadTime(() => import('../pages/Main'));
    const NotFound = lazyMinLoadTime(() => import('../pages/404NotFound'));

    // const Main = lazy(() => {
    //     return Promise.all([
    //         import('../pages/Main'),
    //         new Promise((resolve) => setTimeout(resolve, 300)),
    //     ]).then(([moduleExports]) => moduleExports);
    // });

    return (
        <BrowserRouter>
            <Layout mediaQueries={mediaQueries}>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route
                            path={ROUTES.MAIN}
                            element={<Main mediaQueries={mediaQueries} />}
                        />
                        <Route path={ROUTES.ALL} element={<NotFound />} />
                        {/* <Redirect to="/" /> */}
                    </Routes>
                    {/* <AppRoutes /> */}
                </Suspense>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
