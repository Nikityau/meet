import {useEffect, useState} from "react";

import EventEmitter from "../../../../../helpers/event/event-emitter";

export const useNavSlide = () => {
    const [translateTop, setTT] = useState<number>(0)

    useEffect(() => {
       const unsub = EventEmitter.on('nav-slide', computeTT)

        return () => {
           unsub()
        }
    }, [])

    const computeTT = (top: number) => {
        console.log(top)
        setTT(top)
    }

    return translateTop
}