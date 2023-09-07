import React, {useContext} from 'react';
import {NavContext} from "../provider/nav-context";
import PathPointer from "./path-pointer";
import Route from "./route";

const Nav = () => {

    const cntx = useContext(NavContext)

    return (
        <>
            {
                cntx.routes.map(r => (
                    <Route
                        key={r.id}
                        path={r.route}
                        name={r.name}
                        defPath={cntx.defPath}
                        onCurrent={cntx.onCurrent}
                    />
                ))
            }
            <PathPointer
                offset={cntx.leftOffset}
            />
        </>
    );
};

export default Nav;