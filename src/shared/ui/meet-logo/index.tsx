import React from 'react'
import { Link } from 'react-router-dom'

import './style/index.scss'

const MeetLogo = () => {
  return (
    <Link to='/meet'>
      <div className='meet-logo'>
      <div className='meet-logo__text'>
        <span>Meet</span>
      </div>
      <div className='meet-logo__line'></div>
    </div>
    </Link>
  )
}

export default MeetLogo 