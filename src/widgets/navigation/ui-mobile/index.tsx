import React, {useContext, useEffect, useState} from 'react';
import Route from "../ui/route";
import PathPointer from "../ui/path-pointer";
import {useToggle} from "../../../shared/helpers/hooks/useToggle";
import {NavContext} from "../provider/nav-context";
import {Link} from "react-router-dom";
import cn from "classnames";

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
            <div className={'mob-nav__list'}>
                {
                    cntx.routes?.map(r => (
                        <Link
                            to={r.route}
                            key={r.id}
                        >
                            <div
                                className={
                                    cn(
                                        'mob-nav__path',
                                        cntx.defPath == r.route
                                            ? 'mob-nav__path_current'
                                            : ''
                                    )
                                }
                            >
                                {r.name}
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className={'mob-nav__current'}
                onClick={onClick}
            >
                {
                    cntx.routes.find(p => p.route == cntx.defPath)?.name || null
                }

                <div className={'mob-nav__btn'}>
                    {
                        is
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="black" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M4.25 7.25H20.75M4.25 12.5H20.75M4.25 17.75H20.75" stroke="white"/>
                            </svg>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavMobile;