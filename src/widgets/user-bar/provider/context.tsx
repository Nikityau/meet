import React, {useEffect} from 'react';
import {useUserBar} from "../helpers/hooks/use-user-bar";

export const UserBarContext = React.createContext({
    isOpen: false,
    f: {
        onCircleClick: () => {},
        onHMouseBarPos: (pos: 'in' | 'out') => {},
    }
})

const Context = ({children}: React.PropsWithChildren) => {

    const {state, f} = useUserBar()

    useEffect(() => {
        console.log(f)
    }, [state])

    return (
        <UserBarContext.Provider value={{
            isOpen: state.isBarOpen,
            f,
        }}>
            {children}
        </UserBarContext.Provider>
    )
};

export default Context;