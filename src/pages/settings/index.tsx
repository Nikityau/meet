import React from 'react';
import {Outlet} from "react-router-dom";

import './style/index.scss'
import Navigation from "./ui/navigation";

const Settings = () => {
    return (
        <div className={'settings-page'}>
            <div className={'settings-page__container app-container'}>
                <Navigation/>
                <div className={'settings-page__content'}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Settings;