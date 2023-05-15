import React from "react";

export type EventObject = {
    title,
    wrapper,
    description,
    date,
    location,
    category,
    feedback
}

export type EventStage = {
    id: string,
    uniqueName: string,
    number: number,
    renderNode: React.ReactNode
}

export type Status = 'process' | 'done' | 'wait'

export type StatusObject = {
    status: Status,
    number?: number,
    error: boolean,
}

export type EventHookStageHandler = (status: StatusObject) => void

export type Unsub = () => void

export type EventSpecKeyType = 'next' | 'finish'