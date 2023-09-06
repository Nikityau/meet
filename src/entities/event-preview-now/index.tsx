import React, {useEffect} from 'react';

import Categories from "./ui/categories";
import EventInfo from "./ui/event-info";

import './style/index.scss'
import {Link} from "react-router-dom";
import {EventRes} from "../../pages/meet/helpers/hooks/use-today-events";
import {DateG} from "../../shared/helpers/date-g";

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
        id,
        title,
        preview,
        location,
        endDate,
        gallery,
        organizers,
        startDate,
        tags,
        startTime,
        description
    }: EventRes) => {

    useEffect(() => {
        console.log('sd', startDate, endDate)
    })

    return (
        <Link to={`/meet/in/event/${id}`}>
            <div className={'event-preview-now'}
                 style={{
                     backgroundImage: `url(${preview})`
                 }}
            >
                <div className={'event-preview-now_blackout_light'}/>
                <Categories categories={tags.map(t => t.tag)}/>
                <EventInfo
                    month={DateG.getMonthNameRu(new Date(startDate).getMonth())}
                    time={startTime.slice(0, 5)}
                    title={title}
                    date={new Date(startDate).getDate()}
                    location={location}
                />
            </div>
        </Link>
    );
};

export default EventPreviewNow;