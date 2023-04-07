import React from 'react';
import {useSelector} from "react-redux";

import {navData} from "../data/nav";
import {getSideBarState} from "../model";

import SideBarNavEl from "features/side-bar-nav-el";
import {AppRoutes} from "shared/routes/routes";

const Navigation = () => {

    const sideBarState = useSelector(getSideBarState)

    const onNavElClick = (el: HTMLElement) => {

    }

    return (
        <div className={'side-bar__navigation side-bar_left_offset'}>
            <div className={'side-bar__nav-up'}>
                {
                    navData.map(el => (
                        <SideBarNavEl
                            key={el.id}
                            className={el.className}
                            link={el.link}
                            title={el.title}
                            is_full={sideBarState}
                            onClick={onNavElClick}
                        />
                    ))
                }
            </div>
            <div className={'side-bar__nav-bottom'}>
                <SideBarNavEl
                    className={'settings-icon'}
                    link={AppRoutes.SETTINGS}
                    title={'Настройки'}
                    is_full={sideBarState}
                    onClick={onNavElClick}
                />
            </div>
        </div>
    );
};

export default Navigation;