import React from 'react';
import {useSelector} from "react-redux";
import cn from "classnames"

import DateNFilter from "./ui/date-n-filter";

import {getSideBarState} from "widgets/side-bar/model";
import EventsSlider from "widgets/events-slider";

import './style/index.scss'

const Events = () => {

    const sidebarState = useSelector(getSideBarState)

    return (
        <div className={'events-page'}>
            <div className={cn(
                'app__container',
                'events-page__container',
                {
                    'app__offset': sidebarState
                }
                )}>
                <DateNFilter/>
                <EventsSlider/>
            </div>
        </div>
    );
};

export default Events;