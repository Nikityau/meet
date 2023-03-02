import {useSelector} from "react-redux";

import {getMonth} from "../../store/selector/getMonth";
import {useIs} from "../../../../helpers/hooks/useIs";

export const useMonthCheck = (month: number) => {
    const monthSelected = useSelector(getMonth)

    const is = useIs(monthSelected, () => monthSelected == month)

    return is
}