import React from 'react';

import NavSlider from "./components/nav-slider/nav-slider";
import {MeetLogo} from "./components/logo";
import {Navigation} from "./components/navigation";

import './style/nav-bar.scss'

const NavBar = () => {
    return (
        <div className={'nav-bar'}>
            <div className={'nav-bar__container'}>
                <div className={'nav-bar__work-field'}>
                    <MeetLogo/>
                    <NavSlider/>
                    <Navigation/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;