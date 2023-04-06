import React from 'react';
import {useSelector} from "react-redux";

import {userAvatarSelector} from "../model";

const User = () => {

    const avatar = useSelector(userAvatarSelector)

    return (
        <div className={'user__circle'}>
            <div className={'user__avatar'} style={{
                backgroundImage: `url(${avatar})`
            }}>
            </div>
        </div>
    );
};

export default User;