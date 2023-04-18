import React from 'react';

import {EventSoon} from "features/event-soon";

import {eventsData, EventsSlider} from "entities/events-slider";

const EventsSoon = () => {
    return (
       <EventsSlider
           data={eventsData}
           Component={EventSoon}
       />
    );
};

export default EventsSoon;