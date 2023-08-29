import React, {useContext} from 'react'
import {useSelector} from "react-redux";

import Dot3 from './dot'
import {UserBarContext} from "../../provider/context";
import {userSelector} from "../../../../entities/user-store/user-selector";

type UserCircleProps = {}

const UserCircle = ({}: UserCircleProps) => {
    const cntx = useContext(UserBarContext)

    const user = useSelector(userSelector)

    return (
        <div className='user-circle' onClick={cntx.f.onCircleClick}>
            <div className='user-circle__avatar'
                 style={{
                     backgroundImage: `url(${user?.avatar})`
                 }}
            >
            </div>
            <Dot3/>
        </div>
    )
}

export default UserCircle