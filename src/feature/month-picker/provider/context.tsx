import React, {PropsWithChildren, useEffect, useState} from 'react';

type MonthPickerProps = {

}

type Ftemp<I, O> = (i: I) => O

interface MonthPickerCntx {
    month: number,
    leftOffset: number,
    setMonth: Ftemp<number, void>
    setLeftOffset: Ftemp<number, void>
}

export const MonthPickerContext = React.createContext<MonthPickerCntx>(null)

const MonthPickerProvider = ({children}: MonthPickerProps & PropsWithChildren) => {

    const [month, setMonth] = useState<number>(0)
    const [leftOffset, setLeftOffset] = useState<number>(0)

    return (
        <MonthPickerContext.Provider value={{
            month,
            leftOffset,
            setMonth,
            setLeftOffset
        }}>
            { children }
        </MonthPickerContext.Provider>
    );
};

export default MonthPickerProvider