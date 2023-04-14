import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link, useLocation, Location} from "react-router-dom";
import cn from 'classnames'

import {NavContext} from "./navigation";
import {ElOffsetHandler} from "../controller/nav-controller";

import {AppRoutes} from "shared/routes/routes";
import {IElOffsetHandler} from "shared/helpers/controller/handler-controller";

type SideBarNavElProps = {
    className: string,
    link: AppRoutes,
    title: string,
    is_full: boolean,
    isAddonOffset: boolean,
    isLinkActive: (link:AppRoutes,location: Location) => boolean
}

const SideBarNavEl = ({className, is_full, link, title, isAddonOffset, isLinkActive}: SideBarNavElProps) => {

    const navContext = useContext(NavContext)
    const location = useLocation()

    const div = useRef<HTMLDivElement>()

    const [navElC] = useState<IElOffsetHandler>(new ElOffsetHandler(isAddonOffset))

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
                    'side-bar-nav-el_current': isLinkActive(link,location)
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