import React from 'react';
import Comments from "../../../widgets/comments";
import {event} from "../data/event";

const CommentsList = () => {
    return (
        <div className={'event-comments-list'}>
            <Comments
                eventId={event.id}
                list={event.comments}
            />
        </div>
    );
};

export default CommentsList;