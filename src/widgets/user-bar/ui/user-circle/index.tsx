import React from 'react'

import avatar from '../../assets/avatar.png'
import Dot3 from './dot'

type UserCircleProps = {
  onClick: () => void
}

const UserCircle = ({onClick}:UserCircleProps) => {
  return (
    <div className='user-circle' onClick={onClick}>
        <div className='user-circle__avatar'
            style={{
                backgroundImage: `url(${avatar})`
            }}
        >
        </div>
        <Dot3/>
    </div>
  )
}

export default UserCircle