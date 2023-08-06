import React from 'react'

import avatar from '../../assets/avatar.png'

const UserCircle = () => {
  return (
    <div className='user-circle'>
        <div className='user-circle__avatar'
            style={{
                backgroundImage: `url(${avatar})`
            }}
        >
        </div>
        
    </div>
  )
}

export default UserCircle