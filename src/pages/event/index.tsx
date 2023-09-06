import React from 'react';

import EventDescription from "./ui/event-description";
import EventInfo from "./ui/event-info";
import SimilarEvents from "./ui/similar-events";
import EventWrapper from "./provider/eventWrapper";

import './style/index.scss'

const Event = () => {
    return (
        <EventWrapper>
            <div className={'event-page app-container'}>
                <div className={'event-page__container'}>
                    <EventDescription/>
                    <EventInfo/>
                </div>
                <SimilarEvents/>
            </div>
        </EventWrapper>
    );
};

export default Event;