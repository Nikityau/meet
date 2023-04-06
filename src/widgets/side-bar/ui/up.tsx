import React, {useState} from 'react';

import Logo from "features/logo";

import SideBarArrow from "./side-bar-arrow";

const Up = () => {

    const [state, setState] = useState(false)

    return (
        <div className={'side-bar__up side-bar_left_offset'}>
            <div className={'side-bar__grid-up'}>
                <Logo/>
            </div>
            <div className={'side-bar__grid-down'}>
                <SideBarArrow/>
            </div>
        </div>
    );
};

export default Up;