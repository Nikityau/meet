import React, {useEffect} from 'react';

import {useLeftOffset} from "../helpers/hooks/useLeftOffset";
export const MonthContext = React.createContext(null)

const ContextProvider = ({children}:React.PropsWithChildren) => {
    const {offset, push} = useLeftOffset()

    return (
        <MonthContext.Provider value={{
            offset,
            pushMonthController: push
        }}>
            { children }
        </MonthContext.Provider>
    );
};

export default ContextProvider;