import React from 'react';
import {useParams} from "react-router-dom";

import EventDescription from "./ui/event-description";
import EventInfo from "./ui/event-info";
import SimilarEvents from "./ui/similar-events";

import './style/index.scss'

const Event = () => {
    const id = useParams()

    return (
        <div className={'event-page app-container'}>
            <div className={'event-page__container'}>
                <EventDescription/>
                <EventInfo/>
            </div>
            <SimilarEvents/>
        </div>
    );
};

export default Event;