import React, {useState} from 'react';
import {useSelector} from "react-redux";

import {navData} from "../data/nav";
import {getSideBarState} from "../model";

import NavLine from "./nav-line";

import SideBarNavEl from "features/side-bar-nav-el";
import AddPostBtn from "features/add-post-btn";

import {AppRoutes} from "shared/routes/routes";

import {useTopOffset} from "../helpers/hooks/useTopOffset";


export const NavContext = React.createContext<{
    topOffset: number
}>(null)

const Navigation = () => {

    const sideBarState = useSelector(getSideBarState)

    const {offset, onElClick} = useTopOffset()

    return (
        <NavContext.Provider value={{
            topOffset: offset
        }}>
            <div className={'side-bar__navigation side-bar_left_offset'}>
                <NavLine/>
                <div className={'side-bar__nav-up'}>
                    <AddPostBtn
                        is_full={sideBarState}
                        onClick={onElClick}
                    />
                    <div className={'side-bar__nav-up-wrapper'}>
                        {
                            navData.map(el => (
                                <SideBarNavEl
                                    key={el.id}
                                    className={el.className}
                                    link={el.link}
                                    title={el.title}
                                    is_full={sideBarState}
                                    onClick={onElClick}
                                    isAddonOffset={true}
                                    name={el.name}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={'side-bar__nav-bottom'}>
                    <SideBarNavEl
                        className={'settings-icon'}
                        link={AppRoutes.SETTINGS}
                        title={'Настройки'}
                        is_full={sideBarState}
                        onClick={onElClick}
                        isAddonOffset={false}
                        name={'setting-nav-el'}
                    />
                </div>
            </div>
        </NavContext.Provider>
    );
};

export default Navigation;