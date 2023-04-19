import {useAppLocationStore} from "../model";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export const useWatchLocation = () => {
    const location = useLocation()

    //@ts-ignore
    const {setCurrent} = useAppLocationStore()

    useEffect(() => {
        setCurrent(location.pathname)
    }, [location.pathname])
}