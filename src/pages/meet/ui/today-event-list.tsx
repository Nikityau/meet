import React from 'react';

import {eventsTodayData} from "../data/events-data";
import EventPreviewNow from "../../../entities/event-preview-now";
import SwipeEvents from "../../../entities/swipe-events";
import {useFilterMeet} from "../../../local-states/filter-meet";
import TodayFiltersEv from "./today-filters-ev";

const TodayEventList = () => {
    const {filters} = useFilterMeet()

    return (
        <>
            {
                filters != null
                    ? <TodayFiltersEv/>
                    : <SwipeEvents
                        data={eventsTodayData}
                        Event={EventPreviewNow}
                    />
            }
        </>
    );
};

export default TodayEventList;