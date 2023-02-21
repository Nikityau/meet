import React from 'react';

import './style/notif-circle.scss'

type NotifCircleProps = {
    count: number
}

const NotifCircle = ({count}: NotifCircleProps) => {
    return (
        <div className={'notif-circle'}>
            <div className={'notif-circle__inner'}>
                <span>{ count }</span>
            </div>
        </div>
    );
};

export default NotifCircle;