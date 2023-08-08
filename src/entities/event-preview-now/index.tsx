import React from 'react';

import Categories from "./ui/categories";
import EventInfo from "./ui/event-info";

import './style/index.scss'

export type EventPreviewNowProps = {
    id?: string,
    title: string,
    date: string,
    month: string,
    time: string,
    location: string,
    categories: string[],
    img: string,
}

const EventPreviewNow = (
    {
        title,
        date,
        categories,
        time,
        location,
        month,
        img
    }: EventPreviewNowProps) => {
    return (
        <div className={'event-preview-now'}
             style={{
                 backgroundImage: `url(${img})`
             }}
        >
            <div className={'event-preview-now_blackout_light'}/>
            <Categories categories={categories}/>
            <EventInfo
                month={month}
                time={time}
                title={title}
                date={date}
                location={location}
            />
        </div>
    );
};

export default EventPreviewNow;