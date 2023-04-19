import React, {useContext, useEffect, useRef, useState} from 'react';

import cn from 'classnames'

import {useMonth} from "../helpers/hooks/useMonth";

type MonthProps = {
    number: number,
    title: string
}

const Month = ({number, title}:MonthProps) => {

    const {ref, onClick, isCurrent} = useMonth(number)

    return (
        <div className={cn(
            'month',
            {
                'month_curr': isCurrent
            }
        )} onClick={onClick} ref={ref}>
            <span>{ title }</span>
        </div>
    );
};

export default Month;