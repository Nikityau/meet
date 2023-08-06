import React from 'react'

import MeetLogo from 'shared/ui/meet-logo'
import SearchBar from 'widgets/seach-bar'

import './style/index.scss'
import UserBar from 'widgets/user-bar'

const Header = () => {
  return (
    <div className='meet-header'>
      <div className='meet-header__container app-container'>
        <MeetLogo />
        <SearchBar />
        <div className='meet-header__user-bar'>
          <UserBar />
        </div>
      </div>
    </div>
  )
}

export default Header