import React from 'react';

import {NotificationRing} from "features/notification-ring";

import NotificationList from "entities/notification-list";

const Notification = () => {
    return (
        <div className={'notification'}>
            <NotificationRing/>
            <NotificationList/>
        </div>
    );
};

export default Notification;