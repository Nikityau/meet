import {useEffect, useState} from "react";
import {EventRes} from "./use-today-events";
import axios from "axios";

export const useFetchEvents = (url: string) => {
    const [data, setData] = useState<EventRes[]>(null)

    const fetchByTime = () => {
        setInterval(fetchData, 1000 * 60 * 60)
    }

    const fetchData = async () => {
        const {data} = await axios.get(url)
        console.log(data)
        setData(data)
    }

    useEffect(() => {
        fetchData()
        fetchByTime()
    }, [])

    return data
}