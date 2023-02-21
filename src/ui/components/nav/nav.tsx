import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

type NavProps = {
    icon: string,
    title: string,
    url: string,
    onActive: (...args:[]) => void
}


const Nav = ({url, title,icon, onActive}: NavProps) => {

    return (
        <div className={'nav'}>
            <Link to={url}>
                <div className={'nav__icon'}>
                    <img src={icon} alt={'icon'}/>
                </div>
                <div className={'nav__title'}>
                    <span>{ title }</span>
                </div>
            </Link>
        </div>
    );
};

export default Nav;