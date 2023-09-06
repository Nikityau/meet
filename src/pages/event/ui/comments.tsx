import React from 'react';
import CommentsList from "./comments-list";
import {useEventStore} from "../zustand";

const CommentsTitle = () => {

    const {data} = useEventStore()

    return (
        <div className={'event-comments__title'}>
            <span>{data && data.comments.length} комментария</span>
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