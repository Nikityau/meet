import React from 'react';

import Event from "../event/event";
import EventSwiper from "../../../../ui/components/event-swiper/event-swiper";

import {dataEvents} from "../../data/data-events";

import './style/events.scss'

const Events = () => {
    return (
        <div className={'events-today__events'}>
            <EventSwiper Element={Event} data={dataEvents}/>
        </div>
    );
};

export default Events;