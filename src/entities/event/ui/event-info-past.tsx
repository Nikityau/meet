import React from 'react';

import {EventInfoBaseProps} from "./event-info-today";

const EventInfoPast: React.FC<EventInfoBaseProps> = (
    {
        title
    }
) => {
    return (
        <div className={'event-card__info event-card__info_past'}>
            <span>{title}</span>
        </div>
    );
};

export default EventInfoPast;