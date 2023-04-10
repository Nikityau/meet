import React, {useContext, useRef} from 'react';

import {NavContext} from "./navigation";

const NavLine = () => {

    const navContext = useContext(NavContext)

    const line = useRef<HTMLDivElement>()

    return (
        <div className={'nav-line'}
             ref={line}
             style={{
                 transform: `translate(0, ${navContext.topOffset - line?.current?.clientHeight / 2}px)`
             }}
        >

        </div>
    );
};

export default NavLine;