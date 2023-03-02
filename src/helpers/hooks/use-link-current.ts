import {useLocation} from "react-router-dom";

import {useIs} from "./useIs";

export const useLinkCurrent = (url: string) => {
    const location = useLocation()

    const is = useIs(location.pathname,() => location.pathname == url)

    return is
}

