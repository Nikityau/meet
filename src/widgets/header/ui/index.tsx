import React from 'react';

import Up from "./up";
import Bottom from "./bottom";

import '../style/index.scss'

const Header = () => {
    return (
        <div className={'header'}>
            <Up/>
            <Bottom/>
        </div>
    );
};

export default Header;