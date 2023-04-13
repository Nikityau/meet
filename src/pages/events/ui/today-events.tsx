import React from 'react';
import EventsSlider from "widgets/events-slider";

import {EventNow} from "features/event-now";

import {eventsData} from "widgets/events-slider/model/data";


const TodayEvents = () => {

    return (
        <EventsSlider
            data={eventsData}
            Component={EventNow}
        />
    );
};

export default TodayEvents;