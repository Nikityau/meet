import React, {useEffect} from "react";

import {useCreatePost} from "../zustand";

interface IIsRender {
    Component: React.ReactNode,
    number: number
}

export const IsRender:React.FC<IIsRender> = ({Component, number}) => {

    const {currentStage} = useCreatePost()

    return (
        <>
            {
                currentStage >= number
                    ? Component
                    : null
            }
        </>
    )
}