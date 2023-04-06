import React from 'react';
import {Link} from "react-router-dom";

import {AppRoutes} from "shared/routes/routes";

import './style/logo.scss'

const Logo = () => {
    return (
        <Link to={AppRoutes.EVENTS}>
            <div className={'logo'}>
                <div className={'logo__title'}>
                    <span>Meet</span>
                </div>
                <div className={'logo__line'}>
                </div>
            </div>
        </Link>
    );
};

export default Logo;