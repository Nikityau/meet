import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import cn from 'classnames'

import {WithRouter, WithStore} from "./providers";

import {appInit, appNotInit} from "../app-store-global/is-init";

import Routing from "pages";

import './style/index.scss'
import './style/fonts/custom/index.scss'

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(appInit())
        }, 200)
    }, [])

    return (
        <div className={cn('app', 'app-theme')}>
            <Routing/>
        </div>
    );
};

export default WithStore(WithRouter(() => <App/>));