import React, {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import cn from 'classnames'

import {useLinkCurrent} from "../../../helpers/hooks/use-link-current";

import './style/nav.scss'

type NavProps = {
    icon: string,
    title: string,
    url: string,
    onActive: (is: boolean, el: HTMLElement) => void
}

const Nav = ({url, title,icon, onActive}: NavProps) => {

    const ref = useRef<HTMLDivElement>()

    const isCurrent = useLinkCurrent(url)

    useEffect(() => {
        if(isCurrent) {
            onActive(true, ref.current)
        }
    }, [isCurrent])

    return (
        <div className={cn(
            'nav',
            {
                'nav_current': isCurrent
            }
        )}
            ref={ref}
        >
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