import React from 'react';

import Bottom from "./bottom";

import Notification from "../notification";

import {Search} from "features/search";
import {UserIcon} from "features/user";
import Messages from "features/messages";

import './style/index.scss'

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header__up'}>
                <div className={'header__plug'}></div>
                <Search/>
                <div className={'header__user'}>
                    <Notification/>
                    <Messages/>
                    <UserIcon/>
                </div>
            </div>
            <Bottom/>
        </div>
    );
};

export default Header;