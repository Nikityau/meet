import React from 'react';
import cn from 'classnames'

import './style/index.scss'

type LikeProps = {
    id: string,
    isLiked: boolean
}

const Like = ({isLiked, id}: LikeProps) => {

    const onLike = (e) => {
        e.preventDefault()

        console.log('click like')
    }

    return (
        <div className={cn(
            'like-post',
            {
                'like-post_liked': isLiked
            }
        )} onClick={onLike}>
        </div>
    );
};

export default Like;