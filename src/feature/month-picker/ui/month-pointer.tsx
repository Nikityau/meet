import React, {useContext, useRef} from 'react';
import {MonthPickerContext} from "../provider/context";

const MonthPointer = () => {

    const cntx = useContext(MonthPickerContext)
    const ref = useRef<HTMLDivElement>(null)

    const getOffset = () => {
        const l = cntx?.leftOffset
        const diff = !ref.current ? 0 : ref.current.clientWidth / 2

        return l - diff
    }

    return (
        <div className={'month-picker__pointer'}
            style={{
                transform: `translate(${getOffset()}px, 0)`
            }}
             ref={ref}
        >
        </div>
    );
};

export default MonthPointer;