import React from "react";

import {RoutesApp, WithRouter} from "../routes";

import {Header} from "../modules/header";
import {NavBar} from "../modules/nav-bar";

import './style/app.scss'

const App = () => {

    return (
        <WithRouter>
            <div className={'meet'}>
                <Header/>
                <NavBar/>
                <div className={'meet__main meet__workspace'}>
                     <div className={'meet__wrapper'}>
                         <RoutesApp/>
                     </div>
                </div>
            </div>
        </WithRouter>
    );
};

export default App;