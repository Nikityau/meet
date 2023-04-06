import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "widgets/header";
import {SideBar} from "widgets/side-bar";

const BasePage = () => {
    return (
        <div className={'base-page'}>
            <Header/>
            <SideBar/>
            <Outlet/>
        </div>
    );
};

export default BasePage;