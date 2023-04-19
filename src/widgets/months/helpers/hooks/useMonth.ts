import {useContext, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {chooseMonth, getChosenMonth} from "../../store";
import {MonthContext} from "../../providers/context";
import {IElOffsetHandler} from "../../../../shared/helpers/controller/handler-controller";
import {MonthController} from "../../controller/month-controller";

export const useMonth = (number: number) => {
    const ref = useRef<HTMLDivElement>()

    const dispatch = useDispatch()

    const currMonth = useSelector(getChosenMonth)

    const context = useContext(MonthContext)

    const [isCurrent, setIsCurrent] = useState<boolean>(false)
    const [controller] = useState<IElOffsetHandler>(new MonthController())

    useEffect(() => {
        controller.setEl(ref.current)

        context.pushMonthController(number, controller)
    }, [])

    useEffect(() => {
        changeCurrent()
    }, [currMonth])

    const onClick = () => {
        dispatch(chooseMonth(number))
    }
    const changeCurrent = () => {
        setIsCurrent(currMonth == number)
    }

    return {
        ref,
        isCurrent,
        onClick
    }
}