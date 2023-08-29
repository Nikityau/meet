import React from 'react';

import './style/index.scss'

const ConfirmAccount = () => {
    return (
        <div className={'confirm-account'}>
            <div className={'confirm-account__container'}>
                <div className={'confirm-account__title'}>
                    <span>Подтверждение аккаунта</span>
                </div>
                <div className={'confirm-account__status'}>
                    <span>не подтверждён</span>
                </div>
            </div>
            <div className={'confirm-account__arrow'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                    <path d="M1 13.5L7 7.5L1 1.5" stroke="#828282"/>
                </svg>
            </div>
        </div>
    );
};

export default ConfirmAccount;