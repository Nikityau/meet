import React from 'react';

import Filters from "./components/filters/filters";
import Events from "./components/events/events";
import Title from "../../ui/components/title/title";

import './style/events-today.scss'

const EventsToday = () => {
    return (
        <div className={'events-today'}>
            <Title title={'События сегодня'}/>
            <Filters/>
            <Events/>
        </div>
    );
};

export default EventsToday;