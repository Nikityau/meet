import React from 'react';

import Up from "./up";
import Navigation from "./navigation";

import '../style/index.scss'

const SideBar = () => {
    return (
        <div className={'side-bar'}>
            <Up/>
            <Navigation/>
        </div>
    );
};

export default SideBar;