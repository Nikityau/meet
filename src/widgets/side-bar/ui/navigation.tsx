import React from 'react';
import {useSelector} from "react-redux";
import {Location} from "react-router-dom";

import {navData} from "../data/nav";
import {getSideBarState} from "../model";
import SideBarNavEl from "./side-bar-nav-el";
import AddPostBtn from "./add-post-btn";

import NavLine from "./nav-line";

import {AppRoutes} from "shared/routes/routes";

import {useTopOffset} from "../helpers/hooks/useTopOffset";
import {IElOffsetHandler} from "shared/helpers/controller/handler-controller";

export const NavContext = React.createContext<{
    topOffset: number,
    pushToController: (key: AppRoutes, controller: IElOffsetHandler) => void
}>(null)

const Navigation = () => {

    const sideBarState = useSelector(getSideBarState)

    const {offset, push} = useTopOffset()

    const isLinkActive = (link: AppRoutes, location: Location) => {
        if (location.pathname.includes(link))
            return true

        return false
    }

    return (
        <NavContext.Provider value={{
            topOffset: offset,
            pushToController: push
        }}>
            <div className={'side-bar__navigation'}>
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
                                    isLinkActive={isLinkActive}
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
                        isAddonOffset={true}
                        isLinkActive={isLinkActive}
                    />
                </div>
            </div>
        </NavContext.Provider>
    );
};

export default Navigation;