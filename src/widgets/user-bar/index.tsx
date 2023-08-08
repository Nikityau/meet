import React from 'react'

import UserCircle from './ui/user-circle'
import UserNav from './ui/user-nav'
import UserInfo from './ui/user-info'

import {userInfo} from './data/user-info'
import {navData} from './data/nav-data'

import {useUserBar} from "./helpers/hooks/use-user-bar";

import './style/index.scss'

export const UserBarContext = React.createContext(null)

const UserBar = () => {
    const {state, f} = useUserBar()

    return (
        <UserBarContext.Provider value={{
            isOpen: state.isBarOpen
        }}>
            <div className='user-bar'>
                <UserCircle onClick={f.onCircleClick}/>
                <UserNav
                    onMousePos={f.onHMouseBarPos}
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
                                f.genNavPanel(navData)
                            }
                        </>
                    }
                />
            </div>
        </UserBarContext.Provider>
    )
}

export default UserBar