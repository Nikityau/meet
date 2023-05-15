import React from 'react';

import {CreateEventController} from "../controller/create-event.controller";

import {eventStages} from "../model/event-stages";

const createEventController = CreateEventController.INIT(eventStages)
createEventController.start()

const Wrapper = ({children}:React.PropsWithChildren) => {
    return (
        <>
            {
                children
            }
        </>
    );
};

export default Wrapper;