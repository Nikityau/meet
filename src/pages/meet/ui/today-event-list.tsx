import React from 'react';

import EventPreviewNow from "../../../entities/event-preview-now";
import SwipeEvents from "../../../entities/swipe-events";
import {useFilterMeet} from "../../../local-states/filter-meet";
import TodayFiltersEv from "./today-filters-ev";
import {useTodayEvents} from "../helpers/hooks/use-today-events";

const TodayEventList = () => {
    const {filters} = useFilterMeet()
    const events = useTodayEvents()

    return (
        <>
            {
                filters != null
                    ? <TodayFiltersEv/>
                    : <SwipeEvents
                        data={events}
                        Event={EventPreviewNow}
                    />
            }
        </>
    );
};

export default TodayEventList;