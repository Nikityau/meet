import React from 'react';

import {dataEvents} from "../../data/data-event";

import EventSwiper from "../../../../ui/components/event-swiper/event-swiper";
import Event from "../event/event";

import 'swiper/css'
import './style/event.scss'

const Events = () => {
    return (
        <div className={'nearest-events__events'}>
            <EventSwiper Element={Event} data={dataEvents}/>
        </div>
    );
};

export default Events;