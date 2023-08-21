import {useLocation} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import {RouteDefiner} from "./route-definer";

export const useAppNav = () => {
    const location = useLocation()
    const [definer] = useState(() => new RouteDefiner())
    const [d, setD] = useState<string>("")

    useEffect(() => {
        const path = definer.define(location.pathname)
        setD(path)
    }, [location])

    return d
}