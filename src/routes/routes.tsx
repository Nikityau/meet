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

import Meets from "../pages/meets/meets";
import Communities from "../pages/communities/communities";
import Community from "../pages/community/community";
import Favorite from "../pages/favorite/favorite";
import Archive from "../pages/archive/archive";
import Settings from "../pages/settings/settings";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path={ROUTE_MEETS} element={<Meets/>}/>
            <Route path={ROUTE_COMMUNITIES} element={<Communities/>}/>
            <Route path={ROUTE_COMMUNITY} element={<Community/>}/>
            <Route path={ROUTE_FAVORITES} element={<Favorite/>}/>
            <Route path={ROUTE_ARCHIVE} element={<Archive/>}/>
            <Route path={ROUTE_SETTINGS} element={<Settings/>}/>

            <Route path={'/'} element={<Navigate to={ROUTE_MEETS}/>}/>
        </Routes>
    );
};

export default RoutesApp;