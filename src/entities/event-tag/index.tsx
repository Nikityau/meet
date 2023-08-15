import React from 'react';

import './style/index.scss'

type EventTagProps = {
    id: string,
    tag: string
}

const EventTag = ({tag, id}: EventTagProps) => {
    return (
        <div className={'event-tag'}>
            <span>#{tag}</span>
        </div>
    );
};

export default EventTag;