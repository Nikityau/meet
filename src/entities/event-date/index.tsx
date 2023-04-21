import React from 'react';
import {v4} from "uuid";

import './style/index.scss'

export type EventDateProps = {
    date: string
}

const EventDate: React.FC<EventDateProps> = ({date}) => {
    return (
        <div className={'event-date'}>
            {
                date.split(' ').map(date => (
                    <span key={v4()}>{date}</span>
                ))
            }
        </div>
    );
};

export default EventDate;