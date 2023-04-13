import React from 'react';
import {useSelector} from "react-redux";
import cn from "classnames"

import DateNFilter from "./ui/date-n-filter";
import TodayEvents from "./ui/today-events";
import Block from "./ui/block";
import EventsSoon from "./ui/events-soon";
import CompilationBlock from "./ui/compilation-block";

import {getSideBarState} from "widgets/side-bar/model";
import Advertising from "widgets/advertising";

import adsNavigImg from './assets/ads-navig.png'

import './style/index.scss'

const Events = () => {

    const sidebarState = useSelector(getSideBarState)

    return (
        <div className={'events-page'}>
            <div className={cn(
                'app__container',
                'events-page__container',
                {
                    'app__offset': sidebarState
                }
            )}>
                <DateNFilter/>
                <Block
                    title={'Сегодня'}
                    block={<TodayEvents/>}
                />
                <Block
                    title={'Скоро'}
                    block={<EventsSoon/>}
                />
                <Block
                    title={'Подборки'}
                       block={<CompilationBlock/>}
                />
                <Advertising
                    url={'https://navig.rgups.ru/'}
                    img={adsNavigImg}
                />
            </div>
        </div>
    );
};

export default Events;