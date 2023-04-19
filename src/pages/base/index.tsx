import React from 'react';

import BasePageOutlet from "./ui";

import {Header} from "widgets/header";
import {SideBar} from "widgets/side-bar";

import {useWatchLocation} from "./helpers/useWatchLocation";

import './style/index.scss'

const BasePage = () => {

    useWatchLocation()

    return (
        <div className={'base-page'}>
            <Header/>
            <SideBar/>
            <BasePageOutlet/>
        </div>
    );
};
export default BasePage;