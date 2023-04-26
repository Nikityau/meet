import React, {useEffect, useState} from 'react';

import {useCreateEvent} from "../helpers/hooks/useCreateEvent";

import {ICreatePostContext} from "../controller/type";

export const CreatePostContext = React.createContext<ICreatePostContext>(null)

const Wrapper = ({children}:React.PropsWithChildren) => {

    const {change} = useCreateEvent()

    return (
        <CreatePostContext.Provider value={{
            change
        }}>
            {
                children
            }
        </CreatePostContext.Provider>
    );
};

export default Wrapper;