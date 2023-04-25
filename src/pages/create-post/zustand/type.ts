export type Tab = 'create' | 'view'


export interface INewEvent {
    title: string | null,
    image: string | null,
    description: string | null,
    date: Date | null,
    time: string | null,
    location: string | null,
    categories: string[] | null,
    feedback: string[] | null
}

export interface ICreatePost {
    post: INewEvent,
    currentStage: number,
    maxStage: number
}