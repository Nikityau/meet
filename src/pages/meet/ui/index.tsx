import React from 'react'

import MonthCalendar from "../../../widgets/month-calendar";
import HorChooser from "../../../widgets/hor-chooser";

import TodayEvent from "./today-event";

import '../style/index.scss'

export const MeetPage = () => {
    return (
        <div className={'meet-page'}>
            <MonthCalendar/>
            <HorChooser/>
            <div className={'meet-page__container app-container'}>
                <TodayEvent/>
            </div>
        </div>
    )
}
