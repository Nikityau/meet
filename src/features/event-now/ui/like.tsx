import React from 'react';

const Like = () => {
    const onLike = (e) => {
        e.preventDefault()
    }

    return (
        <div className={'events-now__like'} onClick={onLike}>
        </div>
    );
};

export default Like;