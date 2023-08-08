import React from 'react';

type EventsInfoProps = {
    title,
    date,
    month,
    time,
    location
}

const EventInfo = (
    {
        date,
        location,
        month,
        time,
        title
    }: EventsInfoProps) => {
    return (
        <div className={'event-preview-now__info'}>
            <div className={'event-preview-now__title'}>
                <span>{title}</span>
            </div>
            <div className={'event-preview-now__remain-info'}>
                <span>{date} {month}, {time} · {location}</span>
            </div>
        </div>
    );
};

export default EventInfo;