import React from 'react';
import Title from "./ui/title";
import Themes from "./ui/themes";
import ThemeSwitcher from "../../feature/theme-switcher";

import './style/index.scss'

const SettingsView = () => {
    return (
        <div className={'settings-view'}>
            <Title/>
            <Themes/>
            <div className={'settings-view__container'}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export default SettingsView;