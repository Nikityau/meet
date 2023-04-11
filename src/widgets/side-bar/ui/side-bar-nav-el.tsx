import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import cn from 'classnames'

import {NavContext} from "./navigation";

import {AppRoutes} from "shared/routes/routes";

import {NavElC, NavElController} from "../controller/nav-el-controller";

type SideBarNavElProps = {
    className: string,
    link: AppRoutes,
    title: string,
    is_full: boolean,
    isAddonOffset: boolean,
}

const SideBarNavEl = ({className, is_full, link, title, isAddonOffset}: SideBarNavElProps) => {

    const navContext = useContext(NavContext)
    const location = useLocation()

    const div = useRef<HTMLDivElement>()

    const [navElC] = useState<NavElC>(new NavElController(isAddonOffset))

    useEffect(() => {
        navElC.setEl(div.current)

        navContext.pushToController(link, navElC)
    }, [])


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