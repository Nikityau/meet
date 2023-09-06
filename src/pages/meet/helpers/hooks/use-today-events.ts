import {useFetchEvents} from "./use-fetch-events";

interface Tag {
    id: string,
    tag: string
}

interface Organizer {
    id: string,
    name: string,
    surname: string,
    patronymic: string,
    avatar: string,
    role: string
}

interface Gallery {
    id: string,
    img: string
}

interface Comment {
    id: string,
    eventId: string,
    comment: string
}

export interface EventRes {
    id: string,
    title: string,
    description: string,
    startTime: string,
    startDate: string,
    endDate: string,
    location: string,
    preview: string,
    gallery: Gallery[],
    tags: Tag[],
    organizers: Organizer[],
    comments?: Comment[]
}

export const useTodayEvents = () => {
    const data = useFetchEvents('http://localhost:5000/api/events/today')

    return data
}