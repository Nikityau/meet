import React, {useEffect, useState, useContext} from 'react'
import cn from 'classnames'

import {UserBarContext} from 'widgets/user-bar'

type UserNavProps = {
    userInfo: React.ReactNode,
    tabs: React.ReactNode,
    onMousePos: (pos: 'in' | 'out') => void
}

const UserNav = ({tabs, userInfo, onMousePos}: UserNavProps) => {

    const context = useContext(UserBarContext)

    const onMouseIn = () => {
        onMousePos('in')
    }

    const onMouseOut = () => {
        onMousePos('out')
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