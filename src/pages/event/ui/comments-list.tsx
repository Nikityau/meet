import React from 'react';
import Comments from "../../../widgets/comments";
import {useEventStore} from "../zustand";

const CommentsList = () => {

    const {data} = useEventStore()

    return (
        <div className={'event-comments-list'}>
            {
                data &&
                <Comments
                    eventId={data.id}
                    list={data.comments}
                />
            }
        </div>
    );
};

export default CommentsList;