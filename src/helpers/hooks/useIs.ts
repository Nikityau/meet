import {useEffect, useState} from "react";

export const useIs = (follow: any,predicate: (...args: any[]) => boolean) => {
    const [is, setIs] = useState<boolean>(false)

    useEffect(() => {
        setIs(predicate())
    }, [follow])

    return is
}