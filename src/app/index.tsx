import React from "react";
import cn from 'classnames'

import {WithRouter, WithStore} from "./providers";

import Routing from "pages";

import './style/index.scss'
import './style/fonts/custom/index.scss'

const App = () => {

    return (
        <div className={cn('app', 'app-theme')}>
            <Routing/>
        </div>
    );
};

export default WithStore(WithRouter(() => <App/>));