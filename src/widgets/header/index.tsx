import React from 'react'
import {isMobile} from 'react-device-detect';

import MeetLogo from 'shared/ui/meet-logo'
import SearchBar from 'widgets/seach-bar'
import UserBar from 'widgets/user-bar'

import './style/index.scss'

const Header = () => {
    return (
        <div className='meet-header'>
            <div className='meet-header__container app-container'>
                <MeetLogo/>
                {
                    isMobile
                        ? null
                        : <SearchBar/>
                }
                <div className='meet-header__user-bar'>
                    {
                        isMobile
                            ? <SearchBar/>
                            : null
                    }
                    <UserBar/>
                </div>
            </div>
        </div>
    )
}

export default Header