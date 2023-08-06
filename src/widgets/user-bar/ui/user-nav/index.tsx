import React from 'react'


type UserNavProps = {
  userInfo: React.ReactNode,
  tabs: React.ReactNode
}

const UserNav = ({tabs, userInfo}: UserNavProps) => {
  return (
    <div className='user-nav'>
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