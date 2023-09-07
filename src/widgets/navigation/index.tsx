import React from 'react';
import './style/index.scss'

import {isMobile} from "react-device-detect";
import NavMobile from "./ui-mobile";
import Nav from "./ui";
import NavContextProvider from "./provider/nav-context";

interface Path {
    id: string
    route: string,
    name: string
}

type AppNavigationProps = {
    routes: Path[]
}

const AppNavigation = ({routes}:AppNavigationProps) => {
    return (
        <NavContextProvider routes={routes}>
            <div className={'app-navigation'}>
                {
                    isMobile
                        ? <NavMobile/>
                        :
                        <div className={'app-navigation__wrapper'}>
                            <Nav/>
                        </div>
                }
            </div>
        </NavContextProvider>
    );
};

export default AppNavigation;