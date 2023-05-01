import {useEffect, useState} from "react";

import {StatusObject} from "../../controller/type/type";
import {CreateEventController} from "../../controller/create-event.controller";

export const useRenderCreateEvent = (uniqueName: string) => {
    const [state, setState] = useState<boolean>(() => false)

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
        console.log(status)
        const newState = status
        if (newState.status == 'wait') {
            setState(false)
        } else {
            setState(true)
        }
    }


    return {
        isRender: state,
    }
}