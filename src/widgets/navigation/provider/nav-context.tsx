import React, {useState} from 'react';
import {useAppNav} from "../helpers/useAppNav";

export const NavContext = React.createContext(null)

type Props = {
    routes
} & React.PropsWithChildren

const NavContextProvider = ({children, routes}:Props) => {

    const defPath = useAppNav()
    const [leftOffset, setLeftOffset] = useState<number>(0)

    const onCurrent = (l: number) => {
        setLeftOffset(l - 4)
    }

    return (
        <NavContext.Provider value={{
            routes,
            defPath,
            leftOffset,
            onCurrent
        }}>
            {children}
        </NavContext.Provider>
    );
};

export default NavContextProvider;