import {useEffect, useState} from "react";
import equal from 'deep-equal'

import {CreateEventController} from "../../controller/create-event.controller";
import {StatusObject} from "../../controller/type/type";

import {CreateTextService} from "../../service/create-text.service";

export const useCreateEventStatus = (uniqueName: string) => {
    const [state, setState] = useState<StatusObject>(() => ({
        error: false,
        status: 'wait'
    }))

    useEffect(() => {
        const inst = CreateEventController.GET()
        if (!inst) {
            return
        }

        const unsub = inst.onHookHandler(uniqueName, messageHandler)
        inst.addEventStageService(uniqueName, new CreateTextService())

        return () => {
            unsub()
        }
    }, [])

    const messageHandler = (status: StatusObject) => {
        console.log(status)
        if (!equal(status, state)) {
            setState(status)
        }
    }

    const dispatch = (value: any) => {
        const inst = CreateEventController.GET()
        if (!inst) {
            return
        }

        inst.createEvent(uniqueName, value)
    }


    return {
        status:state,
        dispatch
    }
}