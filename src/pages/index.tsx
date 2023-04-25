import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {AppRoutes} from "shared/routes/routes";

import BasePage from "./base";
import Archive from "./archive";
import Chosen from "./chosen";
import {CreatePost, Creating, Preview} from "./create-post";
import Settings from "./settings";
import {Event} from "./event";
import {Events} from "./events";

const Routing = () => {
    return (
        <Routes>
            <Route path={AppRoutes.BASE} element={<BasePage/>}>
                <Route path={AppRoutes.EVENTS} element={<Events/>}/>
                <Route path={AppRoutes.EVENTS + '/:id'} element={<Event/>}/>
                <Route path={AppRoutes.ARCHIVE} element={<Archive/>}/>
                <Route path={AppRoutes.CHOSEN} element={<Chosen/>}/>

                <Route path={AppRoutes.CREATE_POST} element={<CreatePost/>}>
                    <Route path={'preview'} element={<Preview/>}/>
                    <Route path={'creating'} element={<Creating/>}/>

                    <Route path={AppRoutes.CREATE_POST} element={<Navigate to={'creating'}/>}/>
                </Route>

                <Route path={AppRoutes.SETTINGS} element={<Settings/>}/>

                <Route path={'/'} element={<Navigate to={AppRoutes.EVENTS}/>}/>
            </Route>
        </Routes>
    );
};

export default Routing;