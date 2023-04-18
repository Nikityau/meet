import React, {useEffect} from 'react';

import {IComment} from "widgets/comments";

import Image from "./image";
import Info from "./info";

import '../style/index.scss'
const Comment: React.FC<IComment> = (
    {
        comment,
        userImage,
        userFullName,
        id
    }
) => {

    useEffect(() => {
        console.log('render')
    }, [])

    return (
        <div className={'comment'}>
            <Image img={userImage}/>
            <Info userName={userFullName} comment={comment}/>
        </div>
    );
};

export default React.memo(Comment);