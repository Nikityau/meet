import React from 'react';

import {Search} from "../search";

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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;