import React from 'react';

import AfterUserLogin from "../../helpers/hoc/after-user-login";

import {Search} from "../../features/search";
import {Theme} from "../../features/theme";
import {Notification} from "../../features/notification";
import {User} from "../../features/user";

import LoginBtn from "./components/login-btn/login-btn";

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
                    <AfterUserLogin fallback={<LoginBtn/>}>
                        <div className={'header__block'}>
                            <Notification/>
                        </div>
                        <User/>
                    </AfterUserLogin>
                </div>
            </div>
        </div>
    );
};

export default Header;