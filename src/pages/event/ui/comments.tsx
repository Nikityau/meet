import React, {useState} from 'react';

import {CommentType, dataComments} from "../model/data";

import Comment from "./comment";
import UserComment from "./user-comment";
import {nanoid} from "nanoid";

const Comments = React.memo(() => {

    const [comment, setComments] = useState<CommentType[]>(dataComments)


    const onComment = (comment: CommentType) => {
        setComments(prev => [...prev, comment])
    }

    return (
        <div className={'event__comments'}>
            {
                comment.map(comment => (
                    <Comment
                        key={nanoid()}
                        comment={comment.comment}
                        userFullName={comment.userFullName}
                        userImage={comment.userImage}
                        id={comment.id}
                    />
                ))
            }
            <UserComment
                onComment={onComment}
            />
        </div>
    );
})

export default Comments;