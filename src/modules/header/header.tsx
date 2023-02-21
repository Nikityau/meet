import React from 'react';

import {Search} from "../../features/search";
import {Theme} from "../../features/theme";
import {Notification} from "../../features/notification";
import {User} from "../../features/user";

import './style/header.scss'

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header__container meet__workspace'}>
                <div className={'header__search'}>
                    <Search/>
                </div>
                <div className={'header__other'}>
                    <div className={'header__block'}>
                        <Theme/>
                    </div>
                    <div className={'header__block'}>
                        <Notification/>
                    </div>
                    <User/>
                </div>
            </div>
        </div>
    );
};

export default Header;