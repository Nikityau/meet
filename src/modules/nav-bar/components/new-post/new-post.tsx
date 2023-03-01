import React from 'react';

import circle_img from './assets/circle.png'

import './style/new-post.scss'

const NewPost = () => {
    return (
        <div className={'new-post'}>
            <div className={'new-post__image'}>
                <img src={circle_img} alt={'image'}/>
            </div>
            <div className={'new-post__text'}>
                <span>Создать</span>
                <span>Новый пост</span>
            </div>
        </div>
    );
};

export default NewPost;