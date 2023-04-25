import React, {useEffect, useState} from 'react';


import {useCreateEvent} from "../helpers/hooks/useCreateEvent";

export const CreatePostContext = React.createContext(null)

const Wrapper = ({children}:React.PropsWithChildren) => {

    const {state, change} = useCreateEvent()

    return (
        <CreatePostContext.Provider value={{
            state,
            change
        }}>
            {
                children
            }
        </CreatePostContext.Provider>
    );
};

export default Wrapper;