import {useState} from "react";

type useToggleRes = {
    is: boolean,
    f: {
        on: () => void,
        off: () => void,
        swtch: () => void
    }
}

export const useToggle = (def: boolean = false): useToggleRes => {
    const [is, setIs] = useState(false)

    const on = (): void => {
        setIs(true)
    }

    const off = (): void => {
        setIs(false)
    }

    const swtch = (): void => {
        setIs(prev => !prev)
    }

    return {
        is,
        f: {
            on,
            off,
            swtch
        }
    }
}