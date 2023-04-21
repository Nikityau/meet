import React from 'react';

import './style/index.scss'

type LikeProps = {
    id: string,
    isLiked: boolean
}

const Like = ({isLiked, id}:LikeProps) => {

    const onLike = (e) => {
        e.preventDefault()

        console.log('click like')
    }

    return (
        <div className={'like-post'} onClick={onLike}>
        </div>
    );
};

export default Like;