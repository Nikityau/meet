import React, {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import cn from 'classnames'

type RouteProps = {
    path: string,
    name: string,
    defPath: string,
    onCurrent: (leftOffset: number) => void

}

const Route = ({path, name, defPath, onCurrent}: RouteProps) => {

    const ref = useRef<HTMLDivElement>()

    useEffect(() => {
        if(path == defPath) {
            onCurrent(ref.current.offsetLeft)
        }
    }, [defPath])

    return (
        <Link to={path}>
            <div className={cn('app-route',
                    path == defPath
                        ? 'app-route__current'
                        : ''
                )} ref={ref}>
                <span>{name}</span>
            </div>
        </Link>
    );
};

export default Route;