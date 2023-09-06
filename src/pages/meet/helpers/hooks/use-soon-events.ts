import {useFetchEvents} from "./use-fetch-events";

export const useSoonEvents = () => {
    const data = useFetchEvents('http://localhost:5000/api/events/soon')

    return data
}