import React from 'react';

import qr from '../assets/qr.png'

const EventNavigation = React.memo(() => {
    return (
        <div className={'event__navigation'}>
            <div className={'event__nav-info'}>
                <span className={'title'}>Главный корпус А-128</span>
                <div className={'event__nav-time'}>
                    <span className={'begin'}>Начало в</span>
                    <span className={'begin'}>11:30</span>
                </div>
            </div>
            <div className={'event__nav-qr'}
                 style={{
                     backgroundImage: `url(${qr})`
                 }}
            >
            </div>
        </div>
    );
})

export default EventNavigation;