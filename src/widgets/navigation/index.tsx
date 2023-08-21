import React, {useEffect, useState} from 'react';

import Route from "./ui/route";

import './style/index.scss'
import PathPointer from "./ui/path-pointer";
import {useAppNav} from "./helpers/useAppNav";

interface Path {
    id: string
    route: string,
    name: string
}

type AppNavigationProps = {
    routes: Path[]
}

const AppNavigation = ({routes}:AppNavigationProps) => {

    const defPath = useAppNav()
    const [leftOffset, setLeftOffset] = useState<number>(0)

    const onCurrent = (l: number) => {
        setLeftOffset(l - 4)
    }

    return (
        <div className={'app-navigation'}>
            {
                routes.map(r => (
                    <Route
                        key={r.id}
                        path={r.route}
                        name={r.name}
                        defPath={defPath}
                        onCurrent={onCurrent}
                    />
                ))
            }
            <PathPointer
                offset={leftOffset}
            />
        </div>
    );
};

export default AppNavigation;