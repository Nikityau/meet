import React, {useEffect} from 'react';
import {useFetchEvents} from "../helpers/hooks/use-fetch-events";

const EventWrapper = ({children}:React.PropsWithChildren) => {

    useFetchEvents()

    return (
        <>
            {children}
        </>
    );
};

export default EventWrapper;