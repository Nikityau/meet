import {useCallback, useEffect, useState} from "react";
import equal from 'deep-equal'

import {CreateEventController} from "../../controller/create-event.controller";
import {StatusObject} from "../../controller/type/type";

import {CreateTextService} from "../../service/create-text.service";

export const useCreateEvent = (uniqueName: string) => {
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
        inst.addEventStageService(uniqueName, new CreateTextService())

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

        inst.createEvent(uniqueName, value)
    }, [uniqueName])


    return {
        status: state,
        dispatch
    }
}