import {useFilterMeet} from "../../../../local-states/filter-meet";
import {useSelector} from "react-redux";
import {tagsSelector} from "../../../../redux/tags-store/tags-selector";

export const useSelections = () => {
    const {filters, dispatch} = useFilterMeet()
    const tags = useSelector(tagsSelector)

    const onClick = (tag: string, is: boolean) => {
        if (is) {
            dispatch({
                type: "filterMeet/tags-remove",
                payload: tag
            })

            return
        }

        dispatch({
            type: "filterMeet/tags-add",
            payload: tag
        })
    }

    const isChosen = (tag: string): boolean => {
        if (filters != null && filters.tags != null) {
            for (let t of filters.tags) {
                if (t == tag) {
                    return true
                }
            }
        }

        return false
    }

    return {
        tags,
        onClick,
        isChosen
    }
}