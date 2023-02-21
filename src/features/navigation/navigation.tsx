import React from 'react';

import {ROUTE_ARCHIVE, ROUTE_COMMUNITIES, ROUTE_FAVORITES, ROUTE_MEETS} from "../../routes";

import Nav from "../../ui/components/nav/nav";
const Navigation = () => {


    const onActive = () => {

    }

    return (
        <div className={'navigation'}>
            <Nav
                icon={''}
                title={'Афиша'}
                url={ROUTE_MEETS}
                onActive={onActive}
            />
            <Nav
                icon={''}
                title={'Сообщества'}
                url={ROUTE_COMMUNITIES}
                onActive={onActive}
            />
            <Nav
                icon={''}
                title={'Избранное'}
                url={ROUTE_FAVORITES}
                onActive={onActive}
            />
            <Nav
                icon={''}
                title={'Архив'}
                url={ROUTE_ARCHIVE}
                onActive={onActive}
            />
        </div>
    );
};

export default Navigation;