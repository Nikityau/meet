import {useCallback, useEffect, useState} from "react";
import equal from 'deep-equal'

import {CreateEventController} from "../../controller/create-event.controller";
import {StatusObject} from "../../controller/type/type";


export const useCreateEvent = <T>(uniqueName: keyof T, service: IEventStageService) => {
    const [state, setState] = useState<StatusObject>(() => ({
        error: false,
        status: 'wait'
    }))


    const sub = useCallback(() => {
        const inst = CreateEventController.GET()
        if (!inst) {
            return
        }

        const unsub = inst.onHookHandler(uniqueName.toString(), msgHandlerCb)
        inst.addEventStageService(uniqueName.toString(), service)

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

    const dispatch = useCallback((value: any) => {
        const inst = CreateEventController.GET()
        if (!inst) {
            return
        }

        inst.createEvent(uniqueName.toString(), value)
    }, [uniqueName])


    return {
        status: state,
        dispatch
    }
}