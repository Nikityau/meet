import React from 'react';
import {useDispatch} from "react-redux";

import {toggleThemeAction} from "./model";

import './style/index.scss'

import moon_img from './assets/moon.png'

const Ui = () => {

    const dispatch = useDispatch()

    const onToggleTheme = () => {
        dispatch(toggleThemeAction())
    }

    return (
        <div className={'switch-theme flex_center'} onClick={onToggleTheme}>
            <img src={moon_img} alt={'moon'}/>
        </div>
    );
};

export default Ui;