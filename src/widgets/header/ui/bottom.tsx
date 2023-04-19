import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import cn from 'classnames'

import {Months} from "../../months";
import {getSideBarState} from "../../side-bar/model";
import {useLocation} from "react-router-dom";
import {AppRoutes} from "../../../shared/routes/routes";
import {PrevPageBtn} from "../../../features/prev-page-btn";


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
    const location = useLocation()

    return (
        <BottomWithSBState>
            {
                location.pathname == AppRoutes.EVENTS
                    ? <Months/>
                    : <PrevPageBtn/>
            }
        </BottomWithSBState>
    );
};

export default Bottom;