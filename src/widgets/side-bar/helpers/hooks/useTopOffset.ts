import {useLocation} from "react-router-dom";

import {AppRoutes} from "shared/routes/routes";
import {useOffset} from "shared/helpers/hooks/useOffset";

export const useTopOffset = () => {
    const location = useLocation()
    const {offset, push} = useOffset<AppRoutes>(location.pathname as AppRoutes, true)

    return {
        offset,
        push
    }
}
