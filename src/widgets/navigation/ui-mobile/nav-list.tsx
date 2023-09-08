import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import cn from "classnames";
import {NavContext} from "../provider/nav-context";

const NavList = () => {
    const cntx = useContext(NavContext)

    return (
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
    );
};

export default NavList;