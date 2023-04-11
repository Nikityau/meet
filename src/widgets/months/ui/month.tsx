import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import cn from 'classnames'

import {chooseMonth, getChosenMonth} from "../store";

type MonthProps = {
    number: number,
    title: string
}

const Month = ({number, title}:MonthProps) => {

    const dispatch = useDispatch()
    const currMonth = useSelector(getChosenMonth)

    const onClick = () => {
        dispatch(chooseMonth(number))
    }

    return (
        <div className={cn(
            'month',
            {
                'month_curr': currMonth == number
            }
        )} onClick={onClick}>
            <span>{ title }</span>
        </div>
    );
};

export default Month;