import {useEffect, useState} from "react";

import EventEmitter from "../../../../helpers/event/event-emitter";

type HtmlElData = {
    offsetLeft: number,
    clientWidth: number,
    scaleX: number
}

export const useMonthSlider = () => {
    const [data, setData] = useState<HtmlElData>(null)

    useEffect(() => {
       const unsub = EventEmitter.on('change-month', onChangeMonth)

        return () => {
           unsub()
        }
    }, [])

    const onChangeMonth = (element: HTMLElement) => {
        const monthSlider = document.querySelector('.month-slider')

        setData({
            clientWidth: element.clientWidth,
            offsetLeft: element.offsetLeft,
            scaleX: element.clientWidth / monthSlider.clientWidth
        })
    }

    return data
}