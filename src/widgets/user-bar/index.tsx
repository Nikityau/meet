import React, { useState } from 'react'
import { v4 } from 'uuid'

import UserCircle from './ui/user-circle'
import UserNav from './ui/user-nav'
import UserInfo from './ui/user-info'

import { userInfo } from './data/user-info'
import { NavData, navData } from './data/nav-data'
import NavPanel from './ui/nav-panel'

import SepLine from './ui/user-nav/sep-line'

import './style/index.scss'

export const UserBarContext = React.createContext(null)

const UserBar = () => {

  const [isBarOpen, setIsBarOpen] = useState(false)

  const onCircleClick = () => {
    setIsBarOpen(prev => !prev)
  }

  const genNavPanel = (arr: NavData[][]):JSX.Element[] => {
    const jsx: JSX.Element[] = []

    for(let i = 0; i < arr.length; ++i) {
      for(let j = 0; j < arr[i].length; ++j) {
        const navEl = arr[i][j]
        jsx.push(
          <NavPanel
            icon={navEl.icon}
            text={navEl.text}
            key={navEl.id}
          />
        )
      }

      if(i + 1 != arr.length)
        jsx.push(
          <SepLine key={v4()}/>
        )
    }

    return jsx
  }

  return (
    <UserBarContext.Provider value={{
      isOpen: isBarOpen
    }}>
      <div className='user-bar'>
        <UserCircle onClick={onCircleClick} />
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
                genNavPanel(navData)
              }
            </>
          }
        />
      </div>
    </UserBarContext.Provider>
  )
}

export default UserBar