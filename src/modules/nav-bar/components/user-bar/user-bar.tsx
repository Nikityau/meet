import React from 'react';

import {
    ROUTE_SETTINGS
} from "../../../../routes";
import EventEmitter from "../../../../helpers/event/event-emitter";

import Nav from "../../../../ui/components/nav/nav";

import icon from '../navigation/assets/settings.png'

const UserBar = () => {

    const onActive = (is: boolean, el: HTMLElement) => {
        if(is) {
            const fromTop = el.offsetTop

            EventEmitter.emit('nav-slide', fromTop)
        }
    }

    return (
        <div className={'navigation'}>
            <Nav
                icon={icon}
                title={'Настройки'}
                url={ROUTE_SETTINGS}
                onActive={onActive}
            />
            <Nav
                icon={icon}
                title={'Выйти'}
                url={''}
                onActive={() => {}}
            />
        </div>
    );
};

export default UserBar;