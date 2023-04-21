import React from 'react';
import cn from 'classnames'
import {Link} from "react-router-dom";

import {AppRoutes} from "shared/routes/routes";

import {EventPreviewProps} from "./event-preview";
import {EventInfoBaseProps} from "./event-info-today";

import '../style/index.scss'

type EventProps = {
    id: string,
    type: 'today' | 'soon' | 'past',
    Preview: React.ReactElement<EventPreviewProps>,
    Info: React.ReactElement<EventInfoBaseProps>
}

const Event: React.FC<EventProps> = (
    {
        Info,
        Preview,
        id,
        type
    }
) => {
    return (
        <Link to={AppRoutes.EVENTS + `/${id}`}>
            <div className={cn(
                'event-card',
                {
                    'event_today': type == 'today',
                    'event_soon': type == 'soon',
                    'event_past': type == 'past'
                }
            )}>
                {
                    Preview
                }
                {
                    Info
                }
            </div>
        </Link>
    );
};

export default Event;