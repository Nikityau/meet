import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "widgets/header";

const BasePage = () => {
    return (
        <div className={'base-page'}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default BasePage;