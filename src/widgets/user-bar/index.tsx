import React from 'react'

import UserCircle from './ui/user-circle'
import UserNav from './ui/user-nav'
import UserInfo from './ui/user-info'

import {navData} from './data/nav-data'

import {genNavPanel} from "./helpers/drawNavPanel";
import Context from "./provider/context";

import './style/index.scss'

const UserBar = () => {
    return (
        <Context>
            <div className='user-bar'>
                <UserCircle/>
                <UserNav
                    userInfo={
                        <UserInfo/>
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
        </Context>
    )
}

export default UserBar