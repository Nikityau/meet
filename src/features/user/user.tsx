import React from 'react';

import Dot from "./components/dot/dot";

import user_img from './assets/full-18+.png'

import './style/user.scss'

const User = () => {
    return (
        <div className={'user'}>
            <div className={'user__container'}>
                <div className={'user__name'}>
                    <span>Sarah Blare</span>
                </div>
                <div className={'user__photo'}
                    style={{
                        backgroundImage: `url(${user_img})`
                    }}
                >
                    <Dot status={'online'}/>
                </div>
            </div>
        </div>
    );
};

export default User;