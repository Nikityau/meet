import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import {AppRoutes} from "shared/app-routes";
import MeetBase from "./meet-base";
import {MeetPage} from "./meet";
import Archive from "./archive";
import Event from "./event";
import Settings from "./settings";
import SettingsProfile from "./settings-profile";
import SettingsView from "./settings-view";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={AppRoutes.MEET}>
                <Route path={AppRoutes.LOGIN} element={'login'}/>

                <Route path={'in'} element={<MeetBase/>}>
                    <Route path={AppRoutes.AFFICHE} element={<MeetPage/>}></Route>
                    <Route path={AppRoutes.ARCHIVE} element={<Archive/>}></Route>
                    <Route path={AppRoutes.EVENT} element={<Event/>}/>

                    <Route path={''} element={<Navigate to={AppRoutes.AFFICHE}/>}/>

                    <Route path={AppRoutes.SETTINGS} element={<Settings/>}>
                        <Route path={'profile'} element={<SettingsProfile/>}/>
                        <Route path={'security'}/>
                        <Route path={'view'} element={<SettingsView/>}/>
                        <Route path={'notification'}/>

                        <Route path={''} element={<Navigate to={'profile'}/>}/>
                    </Route>
                </Route>


                <Route path={''} element={<Navigate to={'in'}/>}/>
            </Route>

            <Route path="/" element={<Navigate to={AppRoutes.MEET}/>}></Route>
        </Routes>
    )
}

export default AppRouter; 