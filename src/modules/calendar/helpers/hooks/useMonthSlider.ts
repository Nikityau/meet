import {useEffect, useState} from "react";

import EventEmitter from "../../../../helpers/event/event-emitter";

export const useMonthSlider = () => {
    const [offsetLeft, setOffsetLeft] = useState<number>(0)

    useEffect(() => {
       const unsub = EventEmitter.on('change-month', onChangMonth)

        return () => {
           unsub()
        }
    }, [])

    const onChangMonth = (element: HTMLElement) => {
        setOffsetLeft(element.offsetLeft)
    }

    return offsetLeft
}