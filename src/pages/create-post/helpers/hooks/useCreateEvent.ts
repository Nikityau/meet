import {useReducer} from "react";

export type ChangeEvent = 'title' | 'wrapper'

const initState = {

}

const reducer = () => {
    return initState
}

export const useCreateEvent = () => {
    const [state, dispatch] = useReducer(reducer, initState)


    const change = (key: ChangeEvent, value: any) => {

    }

    return {
        state,
        change
    }
}