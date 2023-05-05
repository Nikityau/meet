import {useCallback, useEffect, useState} from "react";

import {StatusObject} from "../../controller/type/type";
import {CreateEventController} from "../../controller/create-event.controller";

export const useRenderCreateEvent = (uniqueName: string) => {
    const [state, setState] = useState<boolean>(() => false)

    const sub = useCallback(() => {
        const inst = CreateEventController.GET()
        if (!inst) {
            return
        }

        const unsub = inst.onHookHandler(uniqueName, msgHandlerCb)

        return unsub
    }, [uniqueName])


    const msgHandlerCb = useCallback((status: StatusObject) => {
        setState(prev => {
            const newState = status
            if (newState.status == 'wait') {
                return false
            }
            return true
        })
    }, [uniqueName])

    useEffect(() => {
        const unsub = sub()

        return () => {
            unsub()
        }
    }, [sub])

    return {
        isRender: state,
    }
}