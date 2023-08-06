import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { AppRoutes } from "shared/app-routes";
import MeetBase from "./meet-base";
import { MeetPage } from "./meet";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={AppRoutes.LOGIN} element='login'></Route>
            <Route path={AppRoutes.MEET} element={<MeetBase/>}>
                <Route path='affiche' element={<MeetPage/>}></Route>
                <Route path='archive' element={'arch'}></Route>
            </Route>


            <Route path="/" element={<Navigate to={AppRoutes.MEET}/>}></Route>
        </Routes>
    )
}

export default AppRouter; 