import {useEffect, useState} from "react";
import {CreateEventController} from "../../controller/create-event.controller";

export const useCreateEventNext = () => {
    const [cb, setCb] = useState(null)

    useEffect(() => {
        const inst = CreateEventController.GET()
        if(!inst) {
            return
        }

        setCb(inst.nextStage.bind(inst))
    }, [])

    return cb
}