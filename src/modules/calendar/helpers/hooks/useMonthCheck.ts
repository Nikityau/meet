import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {getMonth} from "../../store/selector/getMonth";

export const useMonthCheck = (month: number) => {
    const [is, setIs] = useState<boolean>(false)

    const monthSelected = useSelector(getMonth)

    useEffect(() => {
        if(monthSelected == month) {
            setIs(true)
        }

        if(is) {
            setIs(false)
        }
    }, [monthSelected])

    return is
}