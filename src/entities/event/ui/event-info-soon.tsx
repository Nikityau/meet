import React from 'react';
import cn from 'classnames'

import {EventInfoLiveProps} from "./event-info-today";
import {getClassByEntryType, getTextByEntryType} from "../helpers/byEventEntryType";

type EventInfoSoonProps = {
    Like: React.ReactNode
} & EventInfoLiveProps

const EventInfoSoon: React.FC<EventInfoSoonProps> = (
    {
        type,
        title,
        location,
        Like,
    }
) => {
    return (
        <div className={'event-card__info event-card__info_soon'}>
            <div className={'event-card__info-like'}>
                {
                    Like
                }
            </div>
            <div className={'event-card__info-descr'}>
                <div className={'event-card__info-title'}>
                    <span>{title}</span>
                </div>
                <div className={'event-card__info-below'}>
                    <div className={cn(
                        'event-card__type',
                        getClassByEntryType(type)
                    )}>
                        <span>{getTextByEntryType(type)}</span>
                    </div>
                    <div className={'event-card__location'}>
                        <span>{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventInfoSoon;