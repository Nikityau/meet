import {useCallback, useEffect, useState} from "react";
import equal from "deep-equal";

import {StatusObject} from "../../controller/type/type";

import {CreateEventController} from "../../controller/create-event.controller";

export const useCreateEventStatus = (uniqueName: string) => {
    const [state, setState] = useState<StatusObject>(() => ({
        error: false,
        status: 'wait'
    }))


    const sub = useCallback(() => {
        const inst = CreateEventController.GET()
        if (!inst) {
            return
        }

        const unsub = inst.onHookHandler(uniqueName, msgHandlerCb)

        return unsub
    }, [uniqueName])

    useEffect(() => {
        const unsub = sub()

        return () => {
            unsub()
        }
    }, [sub])


    const msgHandlerCb = useCallback((status: StatusObject) => {
        setState(prev => {
            if (!equal(status, state)) {
                return JSON.parse(JSON.stringify(status))
            }

            return prev
        })
    }, [uniqueName])


    return {
        status:state,
    }
}