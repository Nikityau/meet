import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {getChosenMonth} from "../../store";

import {MonthsController} from "../../controller/months-controller";
import {IMonthController} from "../../controller/month-controller";

export const useLeftOffset = () => {
    const [offset, setOffset] = useState<number>(0)
    const [mntsController] = useState(new MonthsController())

    const month = useSelector(getChosenMonth)

    useEffect(() => {
        computeOffset()
    }, [month])

    const computeOffset = () => {
        const offset = mntsController.leftOffset(month)
        setOffset(offset)
    }

    const pushController = (key: number, controller: IMonthController) => {
        mntsController.push(key, controller)
    }

    return {
        offset,
        pushController
    }
}