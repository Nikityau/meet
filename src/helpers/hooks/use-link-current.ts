import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const useLinkCurrent = (url:string) => {
    const [is, setIs] = useState<boolean>(false)

    const location = useLocation()

    useEffect(() => {
        if(location.pathname == url) {
            setIs(true)

            return
        }

        if(is) {
            setIs(false)
        }
    }, [location])

    return is
}