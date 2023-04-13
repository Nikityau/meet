import React from 'react';

const Like = () => {

    const onLike = (e) => {
        e.preventDefault()
    }

    return (
        <div className={'event-soon__like'} onClick={onLike}>
        </div>
    );
};

export default Like;