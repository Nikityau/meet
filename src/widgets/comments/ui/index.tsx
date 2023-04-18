import React from 'react';
import cn from 'classnames'
import {v4} from "uuid";

import {Comment} from "entities/comment";

import {IComment} from "../model/type";

import '../style/index.scss'

type CommentsProps = {
    classNames?: string[]
    comments: IComment[],
    UserComment?: React.ReactNode
}

const Comments: React.FC<CommentsProps> = (
    {
        classNames,
        UserComment,
        comments
    }
) => {
    return (
        <div className={cn('comments', classNames)}>
            {
                comments.map(comment => (
                    <Comment
                        key={comment.id}
                        id={comment.id}
                        comment={comment.comment}
                        userFullName={comment.userFullName}
                        userImage={comment.userImage}
                    />
                ))
            }
            {
                UserComment
            }
        </div>
    );
};

export default Comments;