import React from 'react';
import InfoOrg from "./info-org";
import Gallery from "./gallery";
import Buttons from "./buttons";
import Stats from "./stats";
import Comments from "./comments";
import Tags from "./tags";

const EventInfo = () => {
    return (
        <div className={'event-info'}>
            <div className={'event-info__block'}>
                <InfoOrg/>
                <Gallery/>
               {/* <Buttons/>*/}
               {/* <Stats/>*/}
            </div>
            <Comments/>
            <Tags/>
        </div>
    );
};

export default EventInfo;