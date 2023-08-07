import React, { useEffect, useState, useContext } from 'react'
import cn from 'classnames'

import { UserBarContext } from 'widgets/user-bar'

type UserNavProps = {
  userInfo: React.ReactNode,
  tabs: React.ReactNode
}

const UserNav = ({tabs, userInfo}: UserNavProps) => {

  const context = useContext(UserBarContext)

  return (
    <div className={(cn('user-nav', { 'user-nav_open': context.isOpen }))}>
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