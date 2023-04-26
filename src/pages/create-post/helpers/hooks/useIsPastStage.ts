import {useEffect, useState} from "react";

import {useCreatePost} from "../../zustand";

export const useIsPastStage = (number: number) => {
    const [is, setIs] = useState<boolean>(false)
    const {currentStage} = useCreatePost()

    useEffect(() => {
        if(currentStage > number) {
            setIs(true)
        } else {
            setIs(false)
        }
    }, [currentStage])

    return is
}