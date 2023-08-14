import React, {useState} from 'react';

import './style/index.scss'
import MonthList from "./ui/month-list";
import MonthPointer from "./ui/month-pointer";

type MonthPickerProps = {
    current: number,
    onMonthChange: (month: number) => void
}

type Ftemp<I, O> = (i: I) => O

interface MonthPickerCntx {
    month: number,
    leftOffset: number,
    setMonth: Ftemp<number, void>
    setLeftOffset: Ftemp<number, void>
}

export const MonthPickerContext = React.createContext<MonthPickerCntx>(null)

const MonthPicker = ({current}: MonthPickerProps) => {

    const [month, setMonth] = useState<number>(current)
    const [leftOffset, setLeftOffset] = useState<number>(0)

    return (
        <MonthPickerContext.Provider value={{
            month,
            leftOffset,
            setMonth,
            setLeftOffset
        }}>
            <div className={'month-picker'}>
                <MonthList/>
                <MonthPointer/>
            </div>
        </MonthPickerContext.Provider>
    );
};

export default MonthPicker;