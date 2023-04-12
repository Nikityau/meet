import React from 'react';
import {useSelector} from "react-redux";
import cn from 'classnames'

import {Months} from "../months";
import {getSideBarState} from "../side-bar/model";

const Bottom = () => {

    const sideBarState = useSelector(getSideBarState)

    return (
        <div className={'header__bottom'}>
            <div className={'app__container header__container'}>
                <div className={cn(
                    'header__wrapper',
                    {
                        'app__offset': sideBarState
                    }
                )}>
                    <Months/>
                </div>
            </div>
        </div>
    );
};

export default Bottom;