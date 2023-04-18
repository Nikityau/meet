import React from 'react';

import Notification from "../../notification";

import Messages from "features/messages";
import {Search} from "features/search";
import {UserIcon} from "features/user";

const Up = () => {
    return (
        <div className={'header__up'}>
            <div className={'header__plug'}></div>
            <Search/>
            <div className={'header__user'}>
                <Notification/>
                <Messages/>
                <UserIcon/>
            </div>
        </div>
    );
};

export default Up;