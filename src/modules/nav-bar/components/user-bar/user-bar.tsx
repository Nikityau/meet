import React from 'react';
import {useDispatch} from "react-redux";

import {
    ROUTE_SETTINGS
} from "../../../../routes";
import EventEmitter from "../../../../helpers/event/event-emitter";

import Nav from "../../../../ui/components/nav/nav";
import {userLogOut} from "../../../../features/user";

import icon from '../navigation/assets/settings.png'

const UserBar = () => {

    const dispatch = useDispatch()

    const onActive = (is: boolean, el: HTMLElement) => {
        if(is) {
            const fromTop = el.offsetTop

            EventEmitter.emit('nav-slide', fromTop)
        }
    }

    const onExit = () => {
        dispatch(userLogOut())
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
                url={'/exit'}
                onActive={onExit}
            />
        </div>
    );
};

export default UserBar;