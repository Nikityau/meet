import {useEffect, useState} from "react";

import EventEmitter from "../../../../helpers/event/event-emitter";

export const useMonthSlider = () => {
    const [offsetLeft, setOffsetLeft] = useState<number>(0)

    useEffect(() => {
       const unsub = EventEmitter.on('change-month', onChangeMonth)

        return () => {
           unsub()
        }
    }, [])

    const onChangeMonth = (element: HTMLElement) => {
        console.log(element.offsetLeft)
        setOffsetLeft(element.offsetLeft)
    }

    return offsetLeft
}