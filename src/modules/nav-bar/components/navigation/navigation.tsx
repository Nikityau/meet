import React from 'react';

import Nav from "../../../../ui/components/nav/nav";

import {
    ROUTE_ARCHIVE,
    ROUTE_COMMUNITIES,
    ROUTE_FAVORITES,
    ROUTE_MEETS
} from "../../../../routes";

import meet_icon from './assets/meet.png'

import './style/navigation.scss'
import EventEmitter from "../../../../helpers/event/event-emitter";

const Navigation = () => {
    const onActive = (is: boolean, el: HTMLElement) => {
        if(is) {
            const fromTop = el.offsetTop

            EventEmitter.emit('nav-slide', fromTop)
        }
    }

    return (
        <div className={'navigation'}>
            <Nav
                icon={meet_icon}
                title={'Афиша'}
                url={ROUTE_MEETS}
                onActive={onActive}
            />
            <Nav
                icon={meet_icon}
                title={'Сообщества'}
                url={ROUTE_COMMUNITIES}
                onActive={onActive}
            />
            <Nav
                icon={meet_icon}
                title={'Избранное'}
                url={ROUTE_FAVORITES}
                onActive={onActive}
            />
            <Nav
                icon={meet_icon}
                title={'Архив'}
                url={ROUTE_ARCHIVE}
                onActive={onActive}
            />
        </div>
    );
};

export default Navigation;