import React from 'react';

import Comment from '../../entities/comment/index'
import {IComment} from "../../entities/comment/data/IComment";
import UserComment from "../../feature/user-comment";

import './style/index.scss'

type CommentsProps = {
    eventId: string,
    list: IComment[],
}
const EventComments = ({eventId, list}: CommentsProps) => {
    return (
        <div className={'comments'}>
            <div className={'comments__list'}>
                {
                    list.map(d => (
                        <Comment
                            key={d.id}
                            id={d.id}
                            eventId={eventId}
                            comment={d.comment}
                            userImage={d.userImage}
                            userName={d.userName}
                            userSurname={d.userSurname}
                        />
                    ))
                }
            </div>
            <UserComment
                eventId={eventId}
            />
        </div>
    );
};

export default EventComments;