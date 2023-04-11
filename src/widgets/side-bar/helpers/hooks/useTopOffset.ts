import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {AppRoutes} from "shared/routes/routes";

import {NavController} from "../../controller/nav-controller";
import {NavElC} from "../../controller/nav-el-controller";

export const useTopOffset = () => {
    const [navController] = useState(new NavController())
    const [offset, setOffset] = useState<number>(0)

    const location = useLocation()

    useEffect(() => {
        posByLocation()
    }, [location])

    const posByLocation = () => {
        const offset = navController.posByLocation(location)

        setOffset(offset)
    }

    const pushToController = (key: AppRoutes, controller: NavElC) => {
        navController.push(key, controller)
    }

    return {
        offset,
        pushToController
    }
}