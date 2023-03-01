import React from 'react';

import WithGreyBg from "../../ui/components/with-grey-bg/with-grey-bg";
import NotifCircle from "./components/notif-circle/notif-circle";

import ring_icon from './assets/ring.png'

import './style/notification.scss'

const Notification = () => {
    return (
        <WithGreyBg>
            <div className={'notification'}>
                <img src={ring_icon} alt={'ring'}/>
                <NotifCircle count={2}/>
            </div>
        </WithGreyBg>
    );
};

export default Notification;