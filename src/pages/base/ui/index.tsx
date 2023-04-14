import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import cn from 'classnames'

import {getSideBarState} from "widgets/side-bar/model";

const BasePageOutlet = () => {

    const sideBarState = useSelector(getSideBarState)

    return (
        <div className={'base-page__main'}>
            <div className={cn(
                'app__container',
                'base-page__container',
                {
                    'app__offset': sideBarState
                }
            )}>
                <Outlet/>
            </div>
        </div>
    );
};

export default BasePageOutlet;