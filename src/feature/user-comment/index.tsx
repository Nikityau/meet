import React from 'react';

import user_img from './assets/user2.png'

import Comment from "./ui/comment";
import {rand} from "../../shared/helpers/rand";
import './style/index.scss'

import {commentsColors} from "../../shared/data/comments-colors";

type UserCommentProps = {
    eventId: string
}

const UserComment = ({eventId}: UserCommentProps) => {
    return (
        <div className={'user-comment'}>
            <div className={'user-comment__image'}
                style={{
                   /* backgroundImage: `url(${user_img})`*/
                    background: commentsColors[rand(0, commentsColors.length - 1)]
                }}
            >
                <img src={user_img}/>
            </div>
            <Comment
                eventId={eventId}
            />
        </div>
    );
};

export default UserComment;