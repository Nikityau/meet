import React from 'react'

type NavPanelProps = {
    icon: string,
    text: string,
    link: string,
    withArrow?: boolean
}

const NavPanel = ({icon, text, link, withArrow}: NavPanelProps) => {
  return (
    <a href={link}>
        <div className='nav-panel'>
            <div className={'nav-panel__container'}>
                <div className='nav-panel__icon'>
                    <img src={icon}/>
                </div>
                <div className='nav-panel__text'>
                    <span>{text}</span>
                </div>
            </div>
            {
                withArrow &&
                <div className={'nav-panel__arrow'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path d="M1 11L6 6L1 0.999999" stroke="#828282"/>
                    </svg>
                </div>
            }
        </div>
    </a>
  )
}

export default NavPanel