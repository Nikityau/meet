import React from 'react';

type CommentDataProps = {
    comment,
    id,
    userName,
    userSurname
}

const CommentData = (
    {
        comment,
        userSurname,
        userName,
        id
    }:CommentDataProps) => {
    return (
        <div className={'comment__data'}>
            <div className={'comment__user'}>
                <span>{userName} {userSurname}</span>
            </div>
            <div className={'comment__text'}>
                <span>{comment}</span>
            </div>
        </div>
    );
};

export default CommentData;