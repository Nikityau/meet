import React from 'react';

import Events from "./components/events/events";
import Title from "../../ui/components/title/title";

import './style/nearest-events.scss'

const NearestEvents = () => {
    return (
        <div className={'nearest-events'}>
            <Title title={'Ближайшие события'}/>
            <Events/>
        </div>
    );
};

export default NearestEvents;