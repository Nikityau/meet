import {useEffect, useState} from "react";
import {HandlerOffsetController, IElOffsetHandler, IHandlerController} from "../controller/handler-controller";

export const useOffset = <K>(watch: K, isUseSimilarKey:boolean = false) => {
    const [offset, setOffset] = useState<number>(0)
    const [handler] = useState<IHandlerController<K, IElOffsetHandler>>(new HandlerOffsetController<K>(isUseSimilarKey))

    useEffect(() => {
        computeOffset()
    }, [watch])

    const computeOffset = () => {
        const offset = handler.invoke(watch)
        setOffset(offset)
    }

    const push = (key: K, controller: IElOffsetHandler) => {
        handler.push(key, controller)
    }

    return {
        offset,
        push
    }
}