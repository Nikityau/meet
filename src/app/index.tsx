import React from "react";

import {WithRouter, WithStore, WithTheme} from "./providers";


import Routing from "pages";

import './style/index.scss'
import './style/fonts/custom/index.scss'

const App = () => {
    return (
        <WithTheme>
            <Routing/>
        </WithTheme>
    );
};

export default WithStore(WithRouter(() => <App/>));