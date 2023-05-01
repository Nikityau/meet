import {CreateEventController} from "../../controller/create-event.controller";

type Next = () => void

export const useCreateEventNext = (): Next => {

    const next = () => {
        const inst = CreateEventController.GET()

        if(!inst) {
            console.log('Dont Created')
        }

        inst.nextStage()
    }

    return next
}