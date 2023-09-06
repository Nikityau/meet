import {useFetchEvents} from "../../../meet/helpers/hooks/use-fetch-events";
import {useArchiveStore} from "../../zustand";
import {useEffect} from "react";

export const useFetchArchive = () => {
    const res = useFetchEvents('http://localhost:5000/api/events/archive')
    const {data,setData} = useArchiveStore()

    useEffect(() => {
        setData(res)
    }, [res])

    return data
}