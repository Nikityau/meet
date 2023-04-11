import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Location} from "react-router-dom";

import {navData} from "../data/nav";
import {getSideBarState} from "../model";
import SideBarNavEl from "./side-bar-nav-el";

import NavLine from "./nav-line";

import AddPostBtn from "features/add-post-btn";

import {AppRoutes} from "shared/routes/routes";

import {useTopOffset} from "../helpers/hooks/useTopOffset";
import {NavElC} from "../controller/nav-el-controller";


export const NavContext = React.createContext<{
    topOffset: number,
    pushToController: (key: AppRoutes, controller: NavElC) => void
}>(null)

const Navigation = () => {

    const sideBarState = useSelector(getSideBarState)

    const {offset, pushToController} = useTopOffset()

    return (
        <NavContext.Provider value={{
            topOffset: offset,
            pushToController
        }}>
            <div className={'side-bar__navigation side-bar_left_offset'}>
                <NavLine/>
                <div className={'side-bar__nav-up'}>
                    <AddPostBtn
                        is_full={sideBarState}
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
                                    isAddonOffset={true}
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
                        isAddonOffset={false}
                    />
                </div>
            </div>
        </NavContext.Provider>
    );
};

export default Navigation;