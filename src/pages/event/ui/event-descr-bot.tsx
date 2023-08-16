import React from 'react';
import {event} from "../data/event";

const EventDescrBot = () => {
    return (
        <div className={'event-descr-bot'}>
            <div className={'event-descr-bot__container'}>
                <p>
                    {
                        event.description
                    }
                </p>
            </div>
        </div>
    );
};

export default EventDescrBot;