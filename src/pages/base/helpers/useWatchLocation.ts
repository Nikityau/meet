import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {getAllUserInfo} from "features/user";

import {HistoryController} from '../model'

export const useWatchLocation = () => {
    const user = useSelector(getAllUserInfo)
    const location = useLocation()

    useEffect(() => {
        HistoryController.setBase(location.pathname)
    }, [])

    useEffect(() => {
        HistoryController.setCurrent(location.pathname, user)
        //controller.getInfo()
    }, [location.pathname, user])
}