import React from 'react';

import './style/index.scss'
import {Link} from "react-router-dom";

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
        img,
        date,
        title,
        month
    }: EventPreviewSoonProps) => {
    return (
        <Link to={`/meet/event/${id}`}>
            <div className={'event-preview-soon'}
                 style={{
                     backgroundImage: `url(${img})`
                 }}
            >
                <div className={'event-preview-soon__blackout_light'}></div>
                <div className={'event-preview-soon__data'}>
                    <div className={'event-preview-soon__title'}>
                        <span>{title}</span>
                    </div>
                    <div className={'event-preview-soon__date'}>
                        <span>{date} {month}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default EventPreviewSoon;