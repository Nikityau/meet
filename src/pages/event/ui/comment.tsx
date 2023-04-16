import React from 'react';

import {CommentType} from "../model/data";

const Comment = ({comment, userFullName, userImage}:CommentType) => {
    return (
        <div className={'event__comment'}>
            <div className={'event__comment-left'}>
                <div className={'event__comment-user-img'}
                    style={{
                        backgroundImage: `url(${userImage})`
                    }}
                >
                </div>
            </div>
            <div className={'event__comment-right'}>
                <div className={'event__comment-user-name'}>
                    <span>{userFullName}</span>
                </div>
                <div className={'event__comment-user-comment'}>
                    <span>{comment}</span>
                </div>
            </div>
        </div>
    );
};

export default Comment;