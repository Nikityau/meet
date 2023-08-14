import React, {useContext} from 'react';

import {SqCalendarContext} from "../index";
import {DateG} from "../../../shared/helpers/date-g";

const Month = () => {

    const cntx = useContext(SqCalendarContext)

    const changeUp = () => {
        cntx.f.onMonthChange('up')
    }
    const changeDown = () => {
        cntx.f.onMonthChange('down')
    }


    return (
        <div className={'square-calendar__month'}>
            <div className={'square-calendar__month-container'}>
                <div className={'square-calendar__month-data'}>
                    <span>{DateG.getMonthNameRu(cntx.state.date.getMonth())} {cntx.state.date.getFullYear()}</span>
                </div>
                <div className={'square-calendar__month-btns'}>
                    <div className={'square-calendar__month-btn-l'}
                        onClick={changeDown}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M10.1831 4.675L6.35811 8.5L10.1831 12.325L8.99977 13.5L3.99977 8.5L8.99977 3.5L10.1831 4.675Z" fill="#848A95"/>
                        </svg>
                    </div>
                    <div className={'square-calendar__month-btn-r'}
                        onClick={changeUp}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M10.1831 4.675L6.35811 8.5L10.1831 12.325L8.99977 13.5L3.99977 8.5L8.99977 3.5L10.1831 4.675Z" fill="#848A95"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Month;