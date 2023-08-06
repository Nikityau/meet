import React from 'react'

import UserCircle from './ui/user-circle'
import UserNav from './ui/user-nav'
import UserInfo from './ui/user-info'

import {userInfo} from './data/user-info'

import './style/index.scss'
import { navData } from './data/nav-data'
import NavPanel from './ui/nav-panel'

const UserBar = () => {
  return (
    <div className='user-bar'>
        <UserCircle/>
        <UserNav
          userInfo={
            <UserInfo
                avatar={userInfo.avatar}
                name={userInfo.name}
                role={userInfo.role}
            />
          }
          tabs={
            <>
              {
                navData.nav.map((data) => (
                    <NavPanel
                      icon={data.icon}
                      text={data.text}
                      key={data.id}
                    />
                ))
              }
            </>
          }
        />
    </div>
  )
}

export default UserBar