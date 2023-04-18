import React from 'react';
import {useSelector} from "react-redux";
import cn from 'classnames'

import Up from "./up";
import Navigation from "./navigation";

import {getSideBarState} from "../model";

import '../style/index.scss'

const SideBarWithSBState = ({children}:React.PropsWithChildren) => {

    const sideBarState = useSelector(getSideBarState)

    return (
        <div className={cn(
            'side-bar',
            {
                'side-bar_open': sideBarState
            }
        )}>
            {children}
        </div>
    );
};

const SideBar = () => {

    return (
        <SideBarWithSBState>
            <Up/>
            <Navigation/>
        </SideBarWithSBState>
    );
};

export default SideBar;