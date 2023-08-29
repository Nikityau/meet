import React from 'react';
import {Link} from "react-router-dom";

type NavBtnProps = {
    icon: string,
    name: string,
    link: string
}

const NavBtn = ({link, name, icon}:NavBtnProps) => {
    return (
        <Link to={link}>
            <div className={'settings-nav-btn'}>
                <div className={'settings-nav-btn__container'}>
                    <div className={'settings-nav-btn__icon'}>
                        <img src={icon} alt={'icon'}/>
                    </div>
                    <div className={'settings-nav-btn__name'}>
                        <span>{name}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NavBtn;