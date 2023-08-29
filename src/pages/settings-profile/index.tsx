import React from 'react';

import InfoEditor from "./ui/info-editor";
import ConfirmAccount from "../../feature/confirm-account";

import './style/index.scss'

const SettingsProfile = () => {
    return (
        <div className={'settings-profile'}>
            <InfoEditor/>
            <ConfirmAccount/>
        </div>
    );
};

export default SettingsProfile;