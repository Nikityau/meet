import React, {useEffect} from "react";
import {useCreateEventStatus} from "./hooks/useCreateEventStatus";


interface IIsRender {
    Component: React.ReactNode,
    uniqueName: string
}

export const IsRender:React.FC<IIsRender> = ({Component, uniqueName}) => {

    const {status} = useCreateEventStatus(uniqueName)

    return (
        <>
            {
                (status.status == 'process' ||
                    status.status == 'done')
                    ? Component
                    : null
            }
        </>
    )
}