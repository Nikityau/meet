import React from 'react';
import {useSelector} from "react-redux";
import {userSelector} from "../../../entities/user-store/user-selector";

const UserInfo = () => {

    const user = useSelector(userSelector)

    return (
        <div className={'settings-user-info'}>
            <div className={'settings-user-info__img'}>
                <img src={user?.avatar} alt={'avatar'}/>
            </div>
            <div className={'settings-user-info__data'}>
                <div className={'settings-user-info__name'}>
                    <span>{user?.name} {user?.surname}</span>
                </div>
                <div className={'settings-user-info__user'}>
                    <span className={'settings-user-info__role'}>{user?.role}</span>
                    <span>ID: {user?.id.slice(0,8)}</span>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;