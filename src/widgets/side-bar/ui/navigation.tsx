import React, {useState} from 'react';
import {useSelector} from "react-redux";

import {navData} from "../data/nav";
import {getSideBarState} from "../model";

import NavLine from "./nav-line";

import SideBarNavEl from "features/side-bar-nav-el";
import AddPostBtn from "features/add-post-btn";

import {AppRoutes} from "shared/routes/routes";


export const NavContext = React.createContext<{
    topOffset: number
}>(null)

const Navigation = () => {

    const sideBarState = useSelector(getSideBarState)

    const [topOffset, setTopOffset] = useState<number>()

    const onNavElClick = (el: HTMLElement) => {
        const attr = el.getAttribute('data-is-need-addon-offset')

        if(attr == 'true') {
            console.log(attr)
            setTopOffset(el.offsetTop + el.clientHeight / 2 + 100)

            return
        }

        setTopOffset(el.offsetTop + el.clientHeight / 2)
    }

    return (
        <NavContext.Provider value={{
            topOffset
        }}>
            <div className={'side-bar__navigation side-bar_left_offset'}>
                <NavLine/>
                <div className={'side-bar__nav-up'}>
                    <AddPostBtn
                        is_full={sideBarState}
                        onClick={onNavElClick}
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
                                    onClick={onNavElClick}
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
                        onClick={onNavElClick}
                        isAddonOffset={false}
                    />
                </div>
            </div>
        </NavContext.Provider>
    );
};

export default Navigation;