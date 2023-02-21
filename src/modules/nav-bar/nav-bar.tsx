import React from 'react';

import {MeetLogo} from "../../features/logo";
import {Navigation} from "../../features/navigation";

import './style/nav-bar.scss'

const NavBar = () => {
    return (
        <div className={'nav-bar'}>
            <div className={'nav-bar__container'}>
                <div className={'nav-bar__work-field'}>
                    <MeetLogo/>
                    <Navigation/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;