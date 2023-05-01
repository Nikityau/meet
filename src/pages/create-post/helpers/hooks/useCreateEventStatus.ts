import {useEffect, useState} from "react";
import equal from "deep-equal";

import {StatusObject} from "../../controller/type/type";

import {CreateEventController} from "../../controller/create-event.controller";

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

        return () => {
            unsub()
        }
    }, [state])

    const messageHandler = (status: StatusObject) => {
        if (!equal(status, state)) {
            const newState = JSON.parse(JSON.stringify(status))
            setState(newState)
        }
    }


    return {
        status:state,
    }
}