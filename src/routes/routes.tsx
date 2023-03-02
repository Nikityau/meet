import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {
    ROUTE_ARCHIVE,
    ROUTE_COMMUNITIES,
    ROUTE_COMMUNITY,
    ROUTE_FAVORITES,
    ROUTE_MEETS,
    ROUTE_SETTINGS
} from "./routes.pathes";

import WithLazyRoute from "./helers/with-lazy-route";

const Meets = React.lazy(() => import('../pages/meets/meets'))
const Communities = React.lazy(() => import('../pages/communities/communities'))
const Community = React.lazy(() => import('../pages/community/community'))
const Favorite = React.lazy(() => import('../pages/favorite/favorite'))
const Archive = React.lazy(() => import('../pages/archive/archive'))
const Settings = React.lazy(() => import('../pages/settings/settings'))


const RoutesApp = () => {
    return (
        <WithLazyRoute>
            <Routes>
                <Route path={ROUTE_MEETS} element={<Meets/>}/>
                <Route path={ROUTE_COMMUNITIES} element={<Communities/>}/>
                <Route path={ROUTE_COMMUNITY} element={<Community/>}/>
                <Route path={ROUTE_FAVORITES} element={<Favorite/>}/>
                <Route path={ROUTE_ARCHIVE} element={<Archive/>}/>
                <Route path={ROUTE_SETTINGS} element={<Settings/>}/>

                <Route path={'/exit'} element={<Navigate to={ROUTE_MEETS}/>}/>
                <Route path={'/'} element={<Navigate to={ROUTE_MEETS}/>}/>
            </Routes>
        </WithLazyRoute>
    );
};

export default RoutesApp;