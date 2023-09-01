import {useFilterBarStore} from "../../../../feature/filter-bar/zustand";
import {useWinClose} from "../../../../shared/helpers/hooks/useWinClose";

export const useFilterIcon = () => {
    const {isOpen, isMouseIn, setIsOpen} = useFilterBarStore()

    useWinClose({
        className: 'filter-icon__icon',
        watchParams: [isOpen, isMouseIn],
        closeCb: () => {
            if(isMouseIn) return

            setIsOpen(false)
        }
    })

    const onIconClick = () => {
        if(isMouseIn) return

        setIsOpen(!isOpen)
    }

    return {
        isOpen,
        onIconClick
    }
}