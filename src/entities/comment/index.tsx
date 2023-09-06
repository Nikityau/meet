import React from 'react';

import {IComment} from './data/IComment'
import CommentData from "./ui/comment-data";
import ResponseBtn from "./ui/response-btn";
import {rand} from "../../shared/helpers/rand";
import {commentsColors} from "../../shared/data/comments-colors";

import user_img from './assets/user.png'

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
                         background: commentsColors[rand(0, commentsColors.length - 1)]
                     }}
                >
                    <img src={user_img}/>
                </div>
                <CommentData
                    comment={comment}
                    userSurname={'Пользователь'}
                    userName={userName}
                    id={id}
                />
            </div>
            <div className={'comment__underline'}/>
            {/*<ResponseBtn/>*/}
        </div>
    );
};

export default Comment;