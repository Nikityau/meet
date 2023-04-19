import React from 'react';

import {EventSoon} from "features/event-soon";

import {eventsData} from "entities/events-slider";

const SimilarEvents = React.memo(() => {
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
                        isEventPast={true}
                    />
                ))
            }
        </div>
    );
})

export default SimilarEvents;