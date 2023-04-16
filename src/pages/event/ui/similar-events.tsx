import React from 'react';

import {EventSoon} from "features/event-soon";

import {eventsData} from "widgets/events-slider/model/data";

const SimilarEvents = () => {
    return (
        <div className={'event__similar-event'}>
            {
                eventsData.map(ev => (
                    <EventSoon
                        isSmall={true}
                        key={ev.id}
                        time={ev.time}
                        title={ev.title}
                        img={ev.img}
                        Like={null}
                    />
                ))
            }
        </div>
    );
};

export default SimilarEvents;