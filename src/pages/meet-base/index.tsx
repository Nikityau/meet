import {v4} from "uuid";
import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from 'widgets/header';
import AppNavigation from "../../widgets/navigation";

import {AppRoutes} from "../../shared/app-routes";

import './style/index.scss'

const MeetBase = () => {
    return (
        <div className='meet-base'>
            <Header/>
            <AppNavigation
                routes={[
                    {
                        id: v4(),
                        route: AppRoutes.AFFICHE,
                        name: 'Афиша'
                    },
                    {
                        id: v4(),
                        route: AppRoutes.ARCHIVE,
                        name: 'Архив'
                    }
                ]}
            />
            <Outlet/>
        </div >
    )
}

export default MeetBase;