import React from 'react';

import EventsSlider from "widgets/events-slider";
import {eventsData} from "widgets/events-slider/model/data";

import {EventSoon} from "features/event-soon";

const EventsSoon = () => {
    return (
       <EventsSlider
           data={eventsData}
           Component={EventSoon}
       />
    );
};

export default EventsSoon;