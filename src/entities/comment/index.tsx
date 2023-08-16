import React from 'react';

import {IComment} from './data/IComment'
import CommentData from "./ui/comment-data";
import ResponseBtn from "./ui/response-btn";

import './style/index.scss'

const Comment = (
    {
        comment,
        id,
        userName,
        userImage,
        userSurname
    }: IComment) => {
    return (
        <div className={'comment'}>
            <div className={'comment__container'}>
                <div className={'comment__avatar'}
                     style={{
                         backgroundImage: `url(${userImage})`
                     }}
                >
                </div>
                <CommentData
                    comment={comment}
                    userSurname={userSurname}
                    userName={userName}
                    id={id}
                />
            </div>
            <div className={'comment__underline'}/>
            <ResponseBtn/>
        </div>
    );
};

export default Comment;