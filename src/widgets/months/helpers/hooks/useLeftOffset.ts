import {useSelector} from "react-redux";

import {getChosenMonth} from "../../store";

import {useOffset} from "shared/helpers/hooks/useOffset";

export const useLeftOffset = () => {
    const month = useSelector(getChosenMonth)
    const {offset, push} = useOffset<number>(month)

    return {
        offset,
        push
    }
}