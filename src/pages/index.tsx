import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { AppRoutes } from "shared/app-routes";
import MeetBase from "./meet-base";
import { MeetPage } from "./meet";
import Archive from "./archive";
import Event from "./event";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={AppRoutes.LOGIN} element='login'></Route>
            <Route path={AppRoutes.MEET} element={<MeetBase/>}>
                <Route path={AppRoutes.AFFICHE} element={<MeetPage/>}></Route>
                <Route path={AppRoutes.ARCHIVE} element={<Archive/>}></Route>
                <Route path={AppRoutes.EVENT} element={<Event/>}/>

                <Route path={''} element={<Navigate to={AppRoutes.AFFICHE}/>}/>
            </Route>


            <Route path="/" element={<Navigate to={AppRoutes.MEET}/>}></Route>
        </Routes>
    )
}

export default AppRouter; 