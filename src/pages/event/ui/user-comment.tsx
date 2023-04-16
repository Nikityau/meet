import React, {useState} from 'react';
import {useSelector} from "react-redux";

import {getAllUserInfo} from "features/user";

import {CommentType} from "../model/data";

import send_img from '../assets/send.png'

type UserCommentProps = {
    onComment: (comment: CommentType) => void
}

const UserComment = ({onComment}: UserCommentProps) => {

    const user = useSelector(getAllUserInfo)

    const [userComment, setUserComment] = useState<string>("")

    const onWriteComment = (input) => {
        setUserComment(input.target.value)
    }

    const onSendComment = () => {
        onComment({
            id: user.id,
            userImage: user.avatar,
            userFullName: `${user.name} ${user.surname}`,
            comment: userComment
        })
        setUserComment("")
    }

    const onKeyDown = (e) => {
        if(e.key != 'Enter') {
            return
        }

        onSendComment()
    }

    return (
        <div className={'event__user-comment'}>
            <div className={'event__user-image'}
                 style={{
                     backgroundImage: `url(${user.avatar})`
                 }}
            >
            </div>
            <div className={'event__user-input'}>
                <input
                    type={"text"}
                    value={userComment}
                    placeholder={'Написать комментарий....'}
                    onChange={onWriteComment}
                    onKeyDown={onKeyDown}
                />
                <div className={'event__user-send'}
                     style={{
                         backgroundImage: `url(${send_img})`
                     }}
                     onClick={onSendComment}
                ></div>
            </div>
        </div>
    );
};

export default UserComment;