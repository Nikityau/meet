import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'widgets/header';

import './style/index.scss'

const MeetBase = () => {
    return (
        <div className='meet-base'>
            <Header/>
            <Outlet/>
        </div >
    )
}

export default MeetBase;