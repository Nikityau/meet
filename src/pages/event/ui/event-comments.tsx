import React, {useState} from 'react';

import {Comments, IComment} from "widgets/comments";
import {UserComment} from "features/user-comment";

import {dataComments} from "../model/data";

const EventComments = () => {

    const [comments, setComments] = useState<IComment[]>(dataComments)

    const onComment = (comment: IComment) => {
        setComments(prev => [...prev, comment])
    }

    return (
        <>
            <Comments
                classNames={['event__comments']}
                comments={comments}
                UserComment={
                    <UserComment
                        onComment={onComment}
                    />
                }
            />
        </>
    );
};

export default EventComments;