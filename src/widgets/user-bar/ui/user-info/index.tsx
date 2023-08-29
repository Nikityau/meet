import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {AppRoutes} from "../../../../shared/app-routes";
import {userSelector} from "../../../../entities/user-store/user-selector";

type UserInfoProps = {
    avatar: string,
    name: string,
    role: 'user' | 'moderator'
}
const UserInfo = ({avatar, name, role}: UserInfoProps) => {

    const user = useSelector(userSelector)

    return (
        <div className='user-info'>
            <div className='user-info__avatar'
                 style={{
                     backgroundImage: `url(${user?.avatar})`
                 }}
            >
            </div>
            <div className='user-info__data'>
                <div className='user-info__name'>
                    <span>{user?.name}</span>
                </div>
                <div className='user-info__below'>
                    <span className={'user-info__role'}>{user?.role}</span>
                    <Link to={`/${AppRoutes.MEET}/${AppRoutes.SETTINGS}`}>
                        <span className={'user-info__edit'}>Редактировать</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserInfo