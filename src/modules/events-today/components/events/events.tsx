import React from 'react';

import Event from "../event/event";
import EventSwiper from "../../../../ui/components/event-swiper/event-swiper";

import {useEventToday} from "../../zustand/zustand";

import './style/events.scss'

const Events = () => {
    const zus = useEventToday()

    const data = useEventToday((state) => state.data)

    return (
        <div className={'events-today__events'}>
            <EventSwiper Element={Event} data={data}/>
        </div>
    );
};

export default Events;