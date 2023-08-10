import React from 'react';

import './style/index.scss'

export type EventPreviewSoonProps = {
    id?: string
    title: string,
    date: string | number,
    month: string,
    img: string
}

const EventPreviewSoon = (
    {
        img,
        date,
        title,
        month
    }: EventPreviewSoonProps) => {
    return (
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
    );
};

export default EventPreviewSoon;