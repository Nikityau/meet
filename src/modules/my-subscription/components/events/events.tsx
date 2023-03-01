import React from 'react';

import EventSwiper from "../../../../ui/components/event-swiper/event-swiper";
import Event from "../event/event";

import {dataEvent} from '../../data/data-event'

const Events = () => {
    return (
        <div className={'my-subscription__events'}>
            <EventSwiper Element={Event} data={dataEvent}/>
        </div>
    );
};

export default Events;