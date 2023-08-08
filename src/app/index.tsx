import React from "react";

import WithRouter from "./provider/with-router";

import AppRouter from "pages";

import './style/fonts.scss'
import './style/base.scss'

const App = () => {
    return (
        <WithRouter>
            <AppRouter/>
        </WithRouter>
    );
};

export default App;