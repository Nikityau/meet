import React from 'react';
import cn from 'classnames'

import {useMonthCheck} from "../../helpers/hooks/useMonthCheck";

import './style/month.scss'

type MonthProps = {
    title: string,
    number: number
}

const Month = ({number, title}:MonthProps) => {

    const isCurrent = useMonthCheck(number)

    return (
        <div className={cn(
            'month',
            {
                'month_current': isCurrent
            }
            )}>
            <span>{ title }</span>
        </div>
    );
};

export default Month;