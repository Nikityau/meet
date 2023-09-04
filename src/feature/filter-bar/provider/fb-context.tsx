import React, {PropsWithChildren} from 'react';
import {useFilterBarState, useFilterBarStore} from "../zustand";
import {useFilterMeet} from "../../../local-states/filter-meet";

interface FBContext {
    onApply: () => void
}

export const FbContext = React.createContext<FBContext>(null)

const FbContextProvider = ({children}: PropsWithChildren) => {

    const meet = useFilterMeet()
    const fb = useFilterBarStore()
    const {setIsOpen} = useFilterBarState()

    const onApply = () => {
        if(fb.filters == null) return

        meet.dispatch({
            type: "filterMeet/location",
            payload: fb.filters.location
        })

        meet.dispatch({
            type: "filterMeet/dates-set",
            payload: fb.filters.dates
        })

        meet.dispatch({
            type: "filterMeet/tags-set",
            payload: fb.filters.tags
        })

        setIsOpen(false)

        fb.dispatch({
            type: "filterMeet/clear",
            payload: null
        })
    }

    return (
        <FbContext.Provider value={{
            onApply
        }}>
            {children}
        </FbContext.Provider>
    );
};

export default FbContextProvider;