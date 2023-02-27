import React from 'react';
import {useDispatch} from "react-redux";
import cn from 'classnames'

import {changeChosen} from "../../store/action/calendar.action";

import {useDateCheck} from "../../helpers/hooks/useDateCheck";
import {dayNumToStr} from "../../helpers/dayNumToStr";
import {isWeekend} from "../../helpers/isWeekend";

import './style/date.scss'

type DateProps = {
    date: number,
    month: number,
    day: number
}

const DateComponent = ({date, month, day}:DateProps) => {

    const isCurrent = useDateCheck(month, date, day)
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(changeChosen(month, date, day))
    }

    return (
        <div className={cn(
            'date',
            {
                'date_weekend': isWeekend(day),
                'date_current': isCurrent
            }
        )}
            onClick={onClick}
        >
            <div className={'date__day'}>
                <span>{ dayNumToStr(day) }</span>
            </div>
            <div className={'date__date'}>
                <span>{ date }</span>
            </div>
        </div>
    );
};

export default DateComponent;