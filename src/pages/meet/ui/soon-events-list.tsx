import React from 'react';

import EventPreviewSoon from "../../../entities/event-preview-soon";
import {useSoonEvents} from "../helpers/hooks/use-soon-events";

type SoonEventsListProps = {

}

const SoonEventsList = ({}: SoonEventsListProps) => {

    const data = useSoonEvents()

    return (
        <div className={'soon-events__list'}>
            {
               data && data.map(el => (
                    <EventPreviewSoon
                        key={el.id}
                        id={el.id}
                        preview={el.preview}
                        startDate={el.startDate}
                        endDate={el.endDate}
                        organizers={el.organizers}
                        startTime={el.startTime}
                        gallery={el.gallery}
                        location={el.location}
                        tags={el.tags}
                        description={el.description}
                        title={el.title}
                    />
                ))
            }
        </div>
    );
};

export default SoonEventsList;