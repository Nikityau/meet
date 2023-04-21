import React from 'react';

import {EventDateProps} from "../../event-date";

export type EventPreviewProps = {
    Like: React.ReactNode | null,
    Date: React.ReactElement<EventDateProps>,
    previewImg: string
}

const EventPreview: React.FC<EventPreviewProps> = (
    {
        previewImg,
        Like,
        Date
    }
) => {
    return (
        <div className={'event__preview'}
            style={{
                backgroundImage: `url(${previewImg})`
            }}
        >
            {
                Like
            }
            {
                Date
            }
        </div>
    );
};

export default EventPreview;