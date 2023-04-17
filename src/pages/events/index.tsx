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
            <div className={'events-page__events-today'}>
                <Block
                    title={'Сегодня'}
                    block={<TodayEvents/>}
                />
            </div>
           <div className={'events-page__events-soon'}>
               <Block
                   title={'Скоро'}
                   block={<EventsSoon/>}
               />
           </div>
           <div className={'events-page__events-compilation'}>
               <Block
                   title={'Подборки'}
                   block={<CompilationBlock/>}
               />
           </div>
           <div className={'events-page__advertising'}>
               <Advertising
                   url={'https://navig.rgups.ru/'}
                   img={adsNavigImg}
               />
           </div>
        </div>
    );
};

export default Events;