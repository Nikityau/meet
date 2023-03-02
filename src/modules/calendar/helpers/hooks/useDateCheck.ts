import {useSelector} from "react-redux";

import {getChosenDate} from "../../store/selector/getChosenDate";
import {useIs} from "../../../../helpers/hooks/useIs";

export const useDateCheck = (month, date, day) => {
    const chosenDate = useSelector(getChosenDate)

    const is = useIs(chosenDate, () => month == chosenDate.month && date == chosenDate.date && day == chosenDate.day)

    return is
}