import React, {useRef} from 'react';
import {Link, useLocation} from "react-router-dom";
import cn from 'classnames'

import {AppRoutes} from "shared/routes/routes";

import './style/index.scss'

type SideBarNavElProps = {
    className: string,
    link: AppRoutes,
    title: string,
    is_full: boolean,
    onClick: (el: HTMLElement) => void,
    isAddonOffset: boolean,
    name: string
}

const SideBarNavEl = ({className, is_full, onClick, link, title, isAddonOffset, name}: SideBarNavElProps) => {

    const div = useRef<HTMLDivElement>()

    const location = useLocation()

    const onClickLink = () => {
        onClick(div.current)
    }

    return (
        <Link to={link}>
            <div className={cn(
                'side-bar-nav-el',
                {
                    'side-bar-nav-el_full': is_full,
                    'side-bar-nav-el_current': location.pathname == link
                }
            )}
                 ref={div}
                 onClick={onClickLink}
                 data-is-need-addon-offset={isAddonOffset}
                 data-name={name}
            >
                <div className={cn('side-bar-nav-el__icon', className)}>
                </div>
                <div className={'side-bar-nav-el__title'}>
                    <span>{title}</span>
                </div>
            </div>
        </Link>
    );
};

export default SideBarNavEl;