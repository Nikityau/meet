import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

import './style/index.scss'
import {EventRes} from "../../pages/meet/helpers/hooks/use-today-events";
import {DateG} from "../../shared/helpers/date-g";

export type EventPreviewSoonProps = {
    id?: string
    title: string,
    date: string | number,
    month: string,
    img: string
}

const EventPreviewSoon = (
    {
        id,
        preview,
        location,
        organizers,
        gallery,
        title,
        endDate,
        tags,
        startTime,
        description,
        startDate
    }: EventRes) => {

    return (
        <Link to={`/meet/in/event/${id}`}>
            <div className={'event-preview-soon'}
                 style={{
                     backgroundImage: `url(${preview})`
                 }}
            >
                <div className={'event-preview-soon__blackout_light'}></div>
                <div className={'event-preview-soon__data'}>
                    <div className={'event-preview-soon__title'}>
                        <span>{title}</span>
                    </div>
                    <div className={'event-preview-soon__date'}>
                        <span>{new Date(startDate).getDate()} {DateG.getMonthNameRu(new Date(startDate).getMonth())}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default EventPreviewSoon;