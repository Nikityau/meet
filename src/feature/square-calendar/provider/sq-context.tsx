import React from 'react';
import {SqRetSt, useSquareCalendar} from "../helpers/useSquareCalendar";
import {SqState} from "../react-reducer";

type SqContextProviderProps = {
    onDateChange: (state: SqState) => void,
} & React.PropsWithChildren

export const SqCalendarContext = React.createContext<SqRetSt>(null)

const SqContextProvider = ({onDateChange, children}:SqContextProviderProps) => {

    const {state, f} = useSquareCalendar({onChange: onDateChange})

    return (
        <SqCalendarContext.Provider  value={{
            state,
            f
        }}>
            {children}
        </SqCalendarContext.Provider>
    );
};

export default SqContextProvider;