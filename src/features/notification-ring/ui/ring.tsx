import React from 'react';

import Notification from "./notification";

import ring_img from '../assets/ring.png'

import '../style/index.scss'

const Ring = () => {
    return (
        <div className={'notification-ring flex_center'}>
            <img src={ring_img} alt={'ring'}/>
            <Notification/>
        </div>
    );
};

export default Ring;