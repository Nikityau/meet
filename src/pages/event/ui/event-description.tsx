import React from 'react';

import EventDescUp from "./event-desc-up";
import EventDescrBot from "./event-descr-bot";

const EventDescription = () => {
    return (
        <div className={'event-description'}>
            <EventDescUp/>
            <EventDescrBot/>
        </div>
    );
};

export default EventDescription;