import React from 'react';
import {DateG} from "../../../shared/helpers/date-g";

type HeaderInfoProps = {
    date: Date,
    time: string,
    location: string,
    title: string,
}

const HeaderInfo = (
    {
        time,
        date,
        location,
        title
    }: HeaderInfoProps) => {
    return (
        <div className={'archive-event-header__info'}>
            <div className={'archive-event-header__title'}>
                <span>{title}</span>
            </div>
            <div className={'archive-event-header__other'}>
                <span>
                    {date.getDate() + ' '}
                    {DateG.getMonthNameRu(date.getMonth()) + ', '}
                    {time + ' · '}
                    {location}
                </span>
            </div>
        </div>
    );
};

export default HeaderInfo;