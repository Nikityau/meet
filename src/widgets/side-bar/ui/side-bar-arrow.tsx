import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import cn from 'classnames'

import {getSideBarState, toggleSideBarState} from "../model";

const SideBarArrow = () => {

    const sideBarState = useSelector(getSideBarState)

    const dispatch = useDispatch()

    const toggleSideBar = () => {
        dispatch(toggleSideBarState())
    }

    return (
        <div className={'side-bar__arrow'} onClick={toggleSideBar}>
            <div className={cn(
                'side-bar__lines',
                {
                    'el_hide': sideBarState
                }
            )}>
                <div className={'side-bar__up-arrow'}></div>
                <div className={'side-bar__bottom-arrow'}></div>
            </div>
            <div className={cn(
                'side-bar__line-arrow',
                {
                    'el_hide': !sideBarState
                }
            )}>
            </div>
        </div>
    );
};

export default SideBarArrow;