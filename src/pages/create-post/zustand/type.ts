import {ChangeEvent} from "../helpers/hooks/useCreateEvent";

export interface INewEvent {
    title?: string,
    image: string,
    description?: string,
    date?: Date,
    time?: string,
    location?: string,
    categories?: string[],
    feedback?: string[]
}


export interface ICreatePostError {
    key: ChangeEvent,
    description: string
}

export interface ICreatePost {
    post: INewEvent,
    currentStage: number,
    maxStage: number,
    error: ICreatePostError[],
    setPostTitle: (...args: any[]) => any
    setNextStage: (...args: any[]) => any,
    setError: (...args: any[]) => any,
    removeError: (...args: any[]) => any,
    setFullPost: (...args: any[]) => any,
    setStage: (...args: any[]) => any,
}