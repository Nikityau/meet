import React from 'react';

import {EventPreviewSoonProps} from "../../../entities/event-preview-soon";

type SoonEventsListProps = {
    Event: React.FunctionComponent<EventPreviewSoonProps>,
    data: EventPreviewSoonProps[]
}

const SoonEventsList = ({Event, data}: SoonEventsListProps) => {
    return (
        <div className={'soon-events__list'}>
            {
                data.map(el => (
                    <Event
                        key={el.id}
                        title={el.title}
                        date={el.date}
                        month={el.month}
                        img={el.img}
                    />
                ))
            }
        </div>
    );
};

export default SoonEventsList;