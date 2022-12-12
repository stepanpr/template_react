import React, { Suspense, lazy, ComponentType } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';

// import AppRoutes from "./AppRoutes"
import Layout from '../widgets/Layout/Layout';
import { Routes, Route, redirect } from 'react-router-dom';
import Spinner from '../shared/ui/Spinner/Spinner';

// import { Content } from '../pages/Main';
import { useMediaQueries } from '../shared/lib/useMediaQueries';

// import "./style.scss"
// import "./st.less"
// import "./s.css"

export const ROUTES = {
    MAIN: '/',
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
        <>
            <Layout mediaQueries={mediaQueries}>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route
                            path={ROUTES.MAIN}
                            element={<Main mediaQueries={mediaQueries} />}
                        />
                        <Route path="*" element={<NotFound />} />

                        {/* <Route exact path="/" component={TasksListPage} />
                        <Route
                            exact
                            path="/:taskId"
                            component={TaskDetailsPage}
                        />
                        <Redirect to="/" /> */}
                    </Routes>
                    {/* <AppRoutes /> */}
                </Suspense>
            </Layout>
        </>
    );
};

export default App;
