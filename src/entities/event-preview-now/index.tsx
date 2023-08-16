import React from 'react';

import Categories from "./ui/categories";
import EventInfo from "./ui/event-info";

import './style/index.scss'
import {Link} from "react-router-dom";

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
        img,
        id
    }: EventPreviewNowProps) => {
    return (
        <Link to={`/meet/event/${id}`}>
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
        </Link>
    );
};

export default EventPreviewNow;