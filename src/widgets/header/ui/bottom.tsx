import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import cn from 'classnames'

import {Months} from "../../months";
import {getSideBarState} from "../../side-bar/model";


const BottomWithSBState = ({children}:React.PropsWithChildren) => {

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
                    { children }
                </div>
            </div>
        </div>
    );
};



const Bottom = () => {
    return (
        <BottomWithSBState>
            <Months/>
        </BottomWithSBState>
    );
};

export default Bottom;