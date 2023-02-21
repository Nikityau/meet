import React from 'react';

import WithGreyBg from "../../ui/components/withGreyBg/withGreyBg";

import moon_icon from './assets/moon.png'

import './style/theme.scss'

const Theme = () => {
    return (
        <WithGreyBg>
            <div className={'theme'}>
                <img src={moon_icon} alt={'moon'}/>
            </div>
        </WithGreyBg>
    );
};

export default Theme;