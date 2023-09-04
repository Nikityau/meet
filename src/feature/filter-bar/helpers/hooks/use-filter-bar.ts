import {useFilterBarState} from "../../zustand";

export const useFilterBar = () => {
    const {setIsOpen, setMousePos} = useFilterBarState()

    const onMouseIn = () => {
        setMousePos(true)
    }
    const onMouseOut = () => {
        setMousePos(false)
    }

    const onCloseClick = () => {
        setIsOpen(false)
    }


    return {
        onCloseClick,
        onMouseIn,
        onMouseOut
    }
}