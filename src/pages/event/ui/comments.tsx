import React from 'react';
import {event} from "../data/event";
import CommentsList from "./comments-list";

const CommentsTitle = () => {
    return (
        <div className={'event-comments__title'}>
            <span>{event.comments.length} комментария</span>
        </div>
    )
}

const Comments = () => {
    return (
        <div className={'event-comments'}>
            <CommentsTitle/>
            <CommentsList/>
        </div>
    );
};

export default Comments;