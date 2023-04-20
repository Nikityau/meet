import React from 'react';

import './style/index.scss'

type EventNavigationProps = {
    where: string,
    time: string
    qr: string
}

const EventNavigation: React.FC<EventNavigationProps> = ({where, qr, time}) => {
    return (
        <div className={'event-navigation'}>
            <div className={'event-navigation__nav-info'}>
                <span className={'title'}>{where}</span>
                <div className={'event-navigation__nav-time'}>
                    <span className={'begin'}>Начало в</span>
                    <span className={'begin'}>{time}</span>
                </div>
            </div>
            <div className={'event-navigation__nav-qr'}
                 style={{
                     backgroundImage: `url(${qr})`
                 }}
            >
            </div>
        </div>
    );
};

export default EventNavigation;