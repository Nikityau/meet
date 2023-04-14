import React from 'react';

import DateNFilter from "./ui/date-n-filter";
import TodayEvents from "./ui/today-events";
import Block from "./ui/block";
import EventsSoon from "./ui/events-soon";
import CompilationBlock from "./ui/compilation-block";

import Advertising from "widgets/advertising";

import adsNavigImg from './assets/ads-navig.png'

import './style/index.scss'

const Events = () => {

    return (
        <div className={'events-page'}>
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
    );
};

export default Events;