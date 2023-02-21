import React from 'react';

import './style/user.scss'

const User = () => {
    return (
        <div className={'user'}>
            <div className={'user__container'}>
                <div className={'user__name'}>
                    <span>Sarah Blare</span>
                </div>
                <div className={'user__photo'}>
                </div>
            </div>
        </div>
    );
};

export default User;