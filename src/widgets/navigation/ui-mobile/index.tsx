import React, {useContext, useEffect, useState} from 'react';
import Route from "../ui/route";
import PathPointer from "../ui/path-pointer";
import {useToggle} from "../../../shared/helpers/hooks/useToggle";
import {NavContext} from "../provider/nav-context";
import {Link} from "react-router-dom";
import cn from "classnames";
import NavList from "./nav-list";
import NavCurrent from "./nav-current";

const NavMobile = () => {
    const {is, f} = useToggle(false)
    const cntx = useContext(NavContext)

    useEffect(() => {
        f.off()
    }, [cntx.defPath])

    const onClick = () => {
        f.swtch()
    }

    return (
        <div className={cn(
            'mob-nav',
            is
                ? 'mob-nav_open'
                : 'mob-nav_close'
        )}
             style={{
                 height: is ? cntx.routes.length * 60 + 60 + 'px' : '60px',
             }}
        >
            <NavList/>
            <NavCurrent is={is} onClick={onClick}/>
        </div>
    );
};

export default NavMobile;