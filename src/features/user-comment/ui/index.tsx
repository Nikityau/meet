import React, {useState} from 'react';
import {useSelector} from "react-redux";

import {IUserComment} from "widgets/comments";
import {getAllUserInfo} from "../../user";

import Image from "./image";

import send_img from "../assets/send.png";

import '../style/index.scss'

type UserCommentProps = {

} & IUserComment

const UserComment: React.FC<UserCommentProps> = ({onComment}) => {

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
        <div className={'user-comment'}>
            <Image img={user.avatar}/>
            <div className={'user-comment__input'}>
                <input
                    type={"text"}
                    value={userComment}
                    placeholder={'Написать комментарий....'}
                    onChange={onWriteComment}
                    onKeyDown={onKeyDown}
                />
                <div className={'user-comment__send'}
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