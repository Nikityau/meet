import React from 'react';

import Block from "entities/block";

import DateNFilter from "../ui/date-n-filter";
import TodayEvents from "../ui/today-events";
import EventsSoon from "../ui/events-soon";
import CompilationBlock from "../ui/compilation-block";

import Advertising from "widgets/advertising";

import adsNavigImg from '../assets/ads-navig.png'

import '../style/index.scss'
const Events = () => {

    return (
        <div className={'events-page'}>
            <DateNFilter/>
            <Block
                classNames={['events-page__events-today']}
                title={'Сегодня'}
                block={<TodayEvents/>}
                gap={40}
            />
            <Block
                classNames={['events-page__events-soon']}
                title={'Скоро'}
                block={<EventsSoon/>}
            />
            <Block
                classNames={['events-page__events-compilation']}
                title={'Подборки'}
                block={<CompilationBlock/>}
                gap={40}
            />
            <Advertising
                classNames={['events-page__advertising']}
                url={'https://navig.rgups.ru/'}
                img={adsNavigImg}
            />
        </div>
    );
};

export default Events;