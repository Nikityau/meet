import React, {useContext} from 'react';
import {NavContext} from "../provider/nav-context";

type Props = {
    is: boolean,
    onClick: () => void
}

const NavCurrent = ({onClick, is}:Props) => {
    const cntx = useContext(NavContext)

    return (
        <div className={'mob-nav__current'}
             onClick={onClick}
        >
            <span>
                {
                    cntx.routes.find(p => p.route == cntx.defPath)?.name || null
                }
            </span>

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
    );
};

export default NavCurrent;