import React from 'react';
import cn from 'classnames'

import {getClassByEntryType, getTextByEntryType} from "../helpers/byEventEntryType";

export type EventInfoBaseProps = {
    title: string
}
export type EventInfoLiveProps = {
    location: string,
    type: 'staff' | 'all',
} & EventInfoBaseProps

type EventInfoTodayProps = {
    DetailBtn: React.ReactNode | null
} & EventInfoLiveProps

const EventInfoToday: React.FC<EventInfoTodayProps> = (
    {
        type,
        title,
        DetailBtn,
        location
    }
) => {
    return (
        <div className={'event-card__info event-card__info_today'}>
            <div className={'event-card__info-title'}>
                <span>{title}</span>
            </div>
            <div className={'event-card__another-info'}>
                <div className={'event-card__more-info'}>
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
                {
                    DetailBtn
                }
            </div>
        </div>
    );
};

export default EventInfoToday;