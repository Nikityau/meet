import React from 'react'

type UserInfoProps = {
    avatar: string,
    name: string,
    role: 'user' | 'moderator'
}

const UserInfo = ({avatar, name, role}:UserInfoProps) => {
  return (
    <div className='user-info'>
        <div className='user-info__avatar'
          style={{
            backgroundImage: `url(${avatar})`
          }}
        >
        </div>
        <div className='user-info__data'>
            <div className='user-info__name'>
              <span>{name}</span>
            </div>
            <div className='user-info__role'>
              <span>{role}</span>
            </div>
        </div>
    </div>
  )
}


export default UserInfo