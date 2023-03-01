import React from 'react';

import AfterUserLogin from "../../helpers/hoc/after-user-login";

import NavSlider from "./components/nav-slider/nav-slider";
import {MeetLogo} from "./components/logo";
import {Navigation} from "./components/navigation";
import UserBar from "./components/user-bar/user-bar";

import './style/nav-bar.scss'

const NavBar = () => {
    return (
        <div className={'nav-bar'}>
            <div className={'nav-bar__container'}>
                <div className={'nav-bar__work-field'}>
                    <MeetLogo/>
                    <NavSlider/>
                    <Navigation/>
                    <AfterUserLogin fallback={null}>
                        <div className={'nav-bar__bottom'}>
                            <UserBar/>
                        </div>
                    </AfterUserLogin>
                </div>
            </div>
        </div>
    );
};

export default NavBar;