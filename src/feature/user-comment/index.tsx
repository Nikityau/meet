import React from 'react';

import user_img from './assets/user.png'
import Comment from "./ui/comment";

import './style/index.scss'

type UserCommentProps = {
    eventId: string
}

const UserComment = ({eventId}: UserCommentProps) => {
    return (
        <div className={'user-comment'}>
            <div className={'user-comment__image'}
                style={{
                    backgroundImage: `url(${user_img})`
                }}
            >
            </div>
            <Comment
                eventId={eventId}
            />
        </div>
    );
};

export default UserComment;