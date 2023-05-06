import React, {useEffect, useState} from 'react';

import {CreateEventController} from "../controller/create-event.controller";

import {eventStages} from "../model/event-stages";
import {EventObject} from "../controller/type/type";

const createEventController = CreateEventController.INIT<EventObject>(eventStages)
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