import React from 'react';

import SoonEventsList from "./soon-events-list";
import {eventsSoonData} from "../data/events-data";
import EventPreviewSoon from "../../../entities/event-preview-soon";

const SoonEvent = () => {
    return (
        <div className={'soon-events'}>
            <div className={'soon-events__title'}>
                <span>События в ближайшие дни</span>
                <div className={'soon-events__arrow'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path d="M1 1L6 6L1 11" stroke="#292929"/>
                    </svg>
                </div>
            </div>
            <SoonEventsList
                Event={EventPreviewSoon}
                data={eventsSoonData}
            />
        </div>
    );
};

export default SoonEvent;