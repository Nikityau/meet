import React from 'react';

import {Event, EventInfoPast, EventPreview} from "entities/event";
import EventDate from "entities/event-date";

import {dataEventPast} from "../model/data";

const SimilarEvents = React.memo(() => {
    return (
        <div className={'event__similar-event'}>
            {
                dataEventPast.map(ev => (
                    <Event
                        key={ev.id}
                        id={ev.id}
                        type={'past'}
                        Preview={
                            <EventPreview
                                Like={null}
                                Date={
                                    <EventDate date={'20 марта'}/>
                                }
                                previewImg={ev.img}
                            />
                        }
                        Info={
                            <EventInfoPast
                                title={ev.title}
                            />
                        }
                    />
                ))
            }
        </div>
    );
})

export default SimilarEvents;