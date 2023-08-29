import React, {useContext} from 'react'
import cn from 'classnames'
import {UserBarContext} from "../../provider/context";


type UserNavProps = {
    userInfo: React.ReactNode,
    tabs: React.ReactNode,
}

const UserNav = ({tabs, userInfo}: UserNavProps) => {

    const context = useContext(UserBarContext)

    const onMouseIn = () => {
        context.f.onHMouseBarPos('in')
    }

    const onMouseOut = () => {
        context.f.onHMouseBarPos('out')
    }

    return (
        <div className={(cn('user-nav', {'user-nav_open': context.isOpen}))}
             onMouseEnter={onMouseIn}
             onMouseLeave={onMouseOut}
        >
            {
                userInfo
            }
            {
                tabs
            }
        </div>
    )
}

export default UserNav