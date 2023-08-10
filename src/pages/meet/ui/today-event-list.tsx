import React from 'react';

import {eventsTodayData} from "../data/events-data";
import EventPreviewNow from "../../../entities/event-preview-now";
import SwipeEvents from "../../../entities/swipe-events";

const TodayEventList = () => {
    return (
        <SwipeEvents
            data={eventsTodayData}
            Event={EventPreviewNow}
        />
    );
};

export default TodayEventList;