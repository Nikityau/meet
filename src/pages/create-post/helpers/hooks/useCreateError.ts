import {useEffect, useState} from "react";

import {ChangeEvent} from "./useCreateEvent";

import {useCreatePost} from "../../zustand";

export const useCreateError = (key: ChangeEvent) => {
    const [isError, setIsError] = useState<boolean>(false)
    const {error} = useCreatePost()

    useEffect(() => {
        console.log(error)
        if(!error) {
            setIsError(false)
            return
        }

        if(error.find(el => el.key == key)) {
            setIsError(true)
            return
        }
    }, [error])


    return isError
}