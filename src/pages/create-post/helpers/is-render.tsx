import React, {useEffect} from "react";

import {useRenderCreateEvent} from "./hooks/useRenderCreateEvent";

interface IIsRender {
    Component: React.ReactNode,
    uniqueName: string
}

export const IsRender: React.FC<IIsRender> = ({Component, uniqueName}) => {

    const {isRender} = useRenderCreateEvent(uniqueName)

    useEffect(() => {
        console.log(uniqueName,'isRender',isRender)
    }, [isRender])

    return (
        <>
            {
                isRender
                    ? Component
                    : null
            }
        </>
    )
}