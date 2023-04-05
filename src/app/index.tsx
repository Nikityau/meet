import React from "react";

import {WithRouter, WithStore} from "./providers";

import Routing from "pages";

import './style/app.scss'

const App = () => {

    return (
        <div className={'app'}>
            <Routing/>
        </div>
    );
};

export default WithStore(WithRouter(() => <App/>));