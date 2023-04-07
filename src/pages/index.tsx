import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {AppRoutes} from "shared/routes/routes";

import BasePage from "./base";
import Events from "./events";
import Archive from "./archive";
import Chosen from "./chosen";

const Routing = () => {
    return (
        <Routes>
            <Route path={AppRoutes.BASE} element={<BasePage/>}>
                <Route path={AppRoutes.EVENTS} element={<Events/>}/>
                <Route path={AppRoutes.ARCHIVE} element={<Archive/>}/>
                <Route path={AppRoutes.CHOSEN} element={<Chosen/>}/>

                <Route path={'/'} element={<Navigate to={AppRoutes.EVENTS}/>}/>
            </Route>
        </Routes>
    );
};

export default Routing;