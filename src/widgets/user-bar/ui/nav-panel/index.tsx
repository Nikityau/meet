import React from 'react'

type NavPanelProps = {
    icon: string,
    text: string
}

const NavPanel = ({icon, text}: NavPanelProps) => {
  return (
    <div className='nav-panel'>
        <div className='nav-panel__icon'>
            <img src={icon}/>
        </div>
        <div className='nav-panel__text'>
            <span>{text}</span>
        </div>
    </div>
  )
}

export default NavPanel