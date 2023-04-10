import React, {useContext, useRef} from 'react';
import {useSelector} from "react-redux";
import cn from 'classnames'

import {NavContext} from "./navigation";

import {isAppInitSelector} from '../../../app-store-global/is-init'

const NavLine = () => {


    const isAppInit = useSelector(isAppInitSelector)

    const navContext = useContext(NavContext)

    const line = useRef<HTMLDivElement>()

    return (
        <div className={cn(
            'nav-line',
            {
                'nav-line__anim': isAppInit
            }
            )}
             ref={line}
             style={{
                 transform: `translate(0, ${navContext.topOffset - (line?.current?.clientHeight || 0) / 2}px)`
             }}
        >

        </div>
    );
};

export default NavLine;