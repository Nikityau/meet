import React from 'react';
import {Route, Routes} from "react-router-dom";

import {AppRoutes} from "./routes";

import BasePage from "./base";
import Events from "./events";

const Routing = () => {
    return (
        <Routes>
            <Route path={AppRoutes.BASE} element={<BasePage/>}>
                <Route path={AppRoutes.EVENTS} element={<Events/>}/>
            </Route>
        </Routes>
    );
};

export default Routing;