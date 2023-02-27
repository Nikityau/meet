import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {getChosenDate} from "../../store/selector/getChosenDate";

export const useDateCheck = (month, date, day) => {
    const [is, setIs] = useState<boolean>(false)

    const chosenDate = useSelector(getChosenDate)

    useEffect(() => {
        if(month == chosenDate.month && date == chosenDate.date && day == chosenDate.day) {
            setIs(true)

            return
        }

        setIs(false)

    }, [chosenDate])

    return is
}