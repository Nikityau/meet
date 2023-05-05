import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import cn from "classnames";

import {appInit} from "../../app-store-global/is-init";

const WithTheme = ({children}:React.PropsWithChildren) => {
        const dispatch = useDispatch()

        useEffect(() => {
            setTimeout(() => {
                dispatch(appInit())
            }, 200)
        }, [])

        return (
            <div className={cn('app', 'app-theme')}>
                {
                    children
                }
            </div>
        );
};

export default WithTheme;