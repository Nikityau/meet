import React from 'react';
import {event} from "../data/event";
import LikeEvent from "../../../feature/like-event";
import ShareEvent from "../../../feature/share-event";
import ViewsCount from "../../../entities/views-count";

const Stats = () => {
    return (
        <div className={'event-stats'}>
            <div className={'event-stats__stat'}>
                <LikeEvent
                    event_id={event.id}
                    likeCount={event.likesCount}
                />
            </div>
            <div className={'event-stats__stat'}>
                <ViewsCount
                    id={event.id}
                    count={event.viewCount}
                />

            </div>
            <div className={'event-stats__stat'}>
                <ShareEvent
                    eventId={event.id}
                    shareCount={event.sharesCount}
                />
            </div>
        </div>
    );
};

export default Stats;