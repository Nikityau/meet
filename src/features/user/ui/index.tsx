import React from 'react';

import User from "./user";
import Arrow from "./arrow";

import '../style/index.scss'

const Ui = () => {
    return (
        <div className={'user flex_center'}>
            <User/>
            <Arrow/>
        </div>
    );
};

export default Ui;