import React from 'react';
import {event} from "../data/event";
import {DateG} from "../../../shared/helpers/date-g";

const EventDescUp = () => {
    return (
        <div className={'event-descr-up'}
            style={{
                backgroundImage: `url(${event.img})`
            }}
        >
            <div className={'event-descr-up__blackout'}/>
            <div className={'event-descr-up__container'}>
                <div className={'event-descr-up__tags'}>
                    <span>
                        {
                            event.tags.reduce((p, c) => p + ' · ' + c)
                        }
                    </span>
                </div>
                <div className={'event-descr-up__info'}>
                    <div className={'event-descr-up__title'}>
                        <span>{event.title}</span>
                    </div>
                    <div className={'event-descr-up__other'}>
                        <span>
                            {
                                event.date.getDate() + ' '
                            }
                            {
                                DateG.getMonthNameRu(event.date.getMonth()) + ', '
                            }
                            {
                                event.time + ' · '
                            }
                            {
                                event.location
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDescUp;