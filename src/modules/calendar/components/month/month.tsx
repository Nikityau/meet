import React, {useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import cn from 'classnames'

import {chooseMonth} from "../../store/action/calendar.action";
import {useMonthCheck} from "../../helpers/hooks/useMonthCheck";

import EventEmitter from "../../../../helpers/event/event-emitter";

import './style/month.scss'

type MonthProps = {
    title: string,
    number: number
}

const Month = ({number, title}:MonthProps) => {

    const ref = useRef<HTMLDivElement>()

    const isCurrent = useMonthCheck(number)

    const dispatch = useDispatch()

    useEffect(() => {
        if(isCurrent) {
            EventEmitter.emit('change-month', ref.current)
        }
    }, [isCurrent])

    const onClick = () => {
        dispatch(chooseMonth(number))
    }

    return (
        <div className={cn(
            'month',
            {
                'month_current': isCurrent
            }
            )}
             ref={ref}
            onClick={onClick}
        >
            <span>{ title }</span>
        </div>
    );
};

export default Month;