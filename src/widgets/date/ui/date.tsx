import React, {useEffect} from 'react';
import cn from 'classnames'
import {isWeekend} from "date-fns";
import {useDispatch, useSelector} from "react-redux";

import {dayWord} from "../helpers/dayWord";

import {chooseDate, getChosenDate} from "../../months";

type DateProps = {
    date: Date
}

const Date = ({date}: DateProps) => {

    const chosenDate = useSelector(getChosenDate)

    const dispatch = useDispatch()

    const isCurrent = (): boolean => {


        if (chosenDate.date == date.getDate() &&
            chosenDate.month == date.getMonth() &&
            chosenDate.year == date.getFullYear()
        )
            return true

        return false
    }

    const onClick = () => {
        dispatch(chooseDate(date))
    }

    return (
        <div className={cn(
            'date',
            {
                'date_weekend': isWeekend(date),
                'date_curr': isCurrent()
            }
        )} onClick={onClick}>
            <div className={'date__weekday'}>
                <span>{dayWord(date.getDay())}</span>
            </div>
            <div className={'date__date'}>
                <span>{date.getDate()}</span>
            </div>
        </div>
    );
};

export default Date;