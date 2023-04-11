import React, {useContext, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import cn from 'classnames'

import {chooseMonth, getChosenMonth} from "../store";
import {MonthContext} from "./index";
import {IMonthController, MonthController} from "../controller/month-controller";

type MonthProps = {
    number: number,
    title: string
}

const Month = ({number, title}:MonthProps) => {

    const ref = useRef<HTMLDivElement>()

    const dispatch = useDispatch()
    const currMonth = useSelector(getChosenMonth)
    const context = useContext(MonthContext)

    const [controller] = useState<IMonthController>(new MonthController())

    useEffect(() => {
        controller.setEl(ref.current)

        context.pushMonthController(number, controller)
    }, [])

    const onClick = () => {
        dispatch(chooseMonth(number))
    }

    return (
        <div className={cn(
            'month',
            {
                'month_curr': currMonth == number
            }
        )} onClick={onClick} ref={ref}>
            <span>{ title }</span>
        </div>
    );
};

export default Month;