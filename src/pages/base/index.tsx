import React from 'react';

import BasePageOutlet from "./ui";

import Header from "widgets/header";
import {SideBar} from "widgets/side-bar";

import './style/index.scss'

const BasePage = () => {
    return (
        <div className={'base-page'}>
            <Header/>
            <SideBar/>
            <BasePageOutlet/>
        </div>
    );
};
export default BasePage;