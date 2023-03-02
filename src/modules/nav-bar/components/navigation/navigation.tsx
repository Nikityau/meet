import React from 'react';

import Nav from "../../../../ui/components/nav/nav";
import AfterUserLogin from "../../../../helpers/hoc/after-user-login";
import NewPost from "../new-post/new-post";

import {
    ROUTE_ARCHIVE,
    ROUTE_COMMUNITIES,
    ROUTE_FAVORITES,
    ROUTE_MEETS
} from "../../../../routes";

import EventEmitter from "../../../../helpers/event/event-emitter";

import meet_icon from './assets/meet.png'
import community_icon from './assets/community.png'

import './style/navigation.scss'

const Navigation = () => {
    const onActive = (is: boolean, el: HTMLElement) => {
        if(is) {
           setTimeout(() => {
               EventEmitter.emit('nav-slide', el.offsetTop)
           }, 200)
        }
    }

    return (
        <div className={'navigation'}>
            <AfterUserLogin fallback={null}>
                <NewPost/>
            </AfterUserLogin>
            <Nav
                icon={meet_icon}
                title={'Афиша'}
                url={ROUTE_MEETS}
                onActive={onActive}
            />
            <Nav
                icon={community_icon}
                title={'Сообщества'}
                url={ROUTE_COMMUNITIES}
                onActive={onActive}
            />
            <AfterUserLogin fallback={null}>
                <Nav
                    icon={meet_icon}
                    title={'Избранное'}
                    url={ROUTE_FAVORITES}
                    onActive={onActive}
                />
            </AfterUserLogin>
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