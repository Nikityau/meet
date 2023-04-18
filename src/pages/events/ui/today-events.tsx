import React from 'react';

import {EventNow} from "features/event-now";

import {eventsData, EventsSlider} from "entities/events-slider";

const TodayEvents = () => {

    return (
        <EventsSlider
            data={eventsData}
            Component={EventNow}
        />
    );
};

export default TodayEvents;