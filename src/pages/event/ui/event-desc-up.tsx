import React from 'react';
import {event} from "../data/event";
import {DateG} from "../../../shared/helpers/date-g";
import {useEventStore} from "../zustand";

const EventDescUp = () => {

    const {data} = useEventStore()

    return (
        <div className={'event-descr-up'}
            style={{
                backgroundImage: `url(${data && data.preview})`
            }}
        >
            <div className={'event-descr-up__blackout'}/>
            <div className={'event-descr-up__container'}>
                <div className={'event-descr-up__tags'}>
                    <span>
                        {
                            data && data.tags.length > 0 &&  data.tags?.map(t => t.tag)?.reduce((p, c) => p + ' · ' + c)
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
                               data && new Date(data.startDate).getDate()  + ' '
                            }
                            {
                                data && DateG.getMonthNameRu(new Date(data.startDate).getMonth()) + ', '
                            }
                            {
                                data && data.startTime.slice(0, 5) + ' · '
                            }
                            {
                                data && data.location
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDescUp;