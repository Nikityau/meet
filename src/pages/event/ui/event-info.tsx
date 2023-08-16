import React from 'react';
import InfoOrg from "./info-org";
import Gallery from "./gallery";
import Buttons from "./buttons";
import Stats from "./stats";

const EventInfo = () => {
    return (
        <div className={'event-info'}>
            <div className={'event-info__block'}>
                <InfoOrg/>
                <Gallery/>
                <Buttons/>
                <Stats/>
            </div>
        </div>
    );
};

export default EventInfo;