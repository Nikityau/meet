import React from 'react';

import './style/index.scss'

type LikeProps = {
}

const Like = ({}:LikeProps) => {

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