import React from 'react';

import './style/index.scss'

const ThemeSwitcher = () => {
    return (
        <div className={'theme-switcher'}>
            <div className={'theme-switcher__container'}>
                <div className={'theme-switcher__icon'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M19.7519 13.7539C18.597 14.2358 17.3296 14.5019 16 14.5019C10.6152 14.5019 6.25 10.1367 6.25 4.75194C6.25 3.42235 6.51614 2.15491 6.99806 1C3.47566 2.46981 1 5.94677 1 10.0019C1 15.3867 5.36522 19.7519 10.75 19.7519C14.8052 19.7519 18.2821 17.2763 19.7519 13.7539Z" stroke="#B1B5BD"/>
                    </svg>
                </div>
                <div className={'theme-switcher__text'}>
                    <span>переключить на ночную тему</span>
                </div>
            </div>
        </div>
    );
};

export default ThemeSwitcher;