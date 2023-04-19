import {useCallback, useEffect, useState} from "react";

import {
    HandlerOffsetController,
    IElOffsetHandler,
    IHandlerController
} from "../controller/handler-controller";

export const useOffset = <K>(watch: K, isUseSimilarKey: boolean = false) => {
    const [offset, setOffset] = useState<number>(0)
    const [handler] = useState<IHandlerController<K, IElOffsetHandler>>(new HandlerOffsetController<K>(isUseSimilarKey))

    const pushCb = useCallback((key: K, controller: IElOffsetHandler) => {
        handler.push(key, controller)
    }, [])

    useEffect(() => {
        computeOffset()
    }, [watch])

    const computeOffset = () => {
        const offset = handler.invoke(watch)
        setOffset(offset)
    }

    return {
        offset,
        push: pushCb
    }
}