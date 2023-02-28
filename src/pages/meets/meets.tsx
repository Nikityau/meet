import React from 'react';

import {Calendar} from "../../modules/calendar";
import {EventsToday} from "../../modules/events-today";
import {NearestEvents} from "../../modules/nearest-events";

import './style/meets.scss'

const Meets = () => {
    return (
        <div className={'meets-page'}>
            <Calendar/>
            <EventsToday/>
            <NearestEvents/>
        </div>
    );
};

export default Meets;