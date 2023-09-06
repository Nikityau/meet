import {useParams} from "react-router-dom";
import {useEventStore} from "../../zustand";
import {useEffect} from "react";
import axios from "axios";

export const useFetchEvents = () => {
    const {id} = useParams()
    const {setData} = useEventStore()

    const fetchEvent = async () => {
        const {data} = await axios.get(`http://localhost:5000/api/events/${id}`)
        console.log(data)
        setData(data)
    }

    useEffect(() => {
        fetchEvent()
    }, [])
}