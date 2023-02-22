import React from 'react';
import {Link} from "react-router-dom";

import {ROUTE_MEETS} from "../../../../routes";

import './style/logo.scss'
const Logo = () => {
    return (
        <div className={'meet-logo'}>
            <Link to={ROUTE_MEETS}>
                <div className={'meet-logo__m'}>
                    <span>M</span>
                    <div className={'meet-logo_underline'}></div>
                </div>
                <div className={'meet-logo__other'}>
                    <span>eet</span>
                </div>
            </Link>
        </div>
    );
};

export default Logo;