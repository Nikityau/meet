import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import cn from 'classnames'

import {AppRoutes} from "shared/routes/routes";

import {NavElC, NavElController} from "widgets/side-bar/controller/nav-el-controller";
import {NavContext} from "widgets/side-bar/ui/navigation";

import './style/index.scss'

type AddPostBtnProps = {
    is_full: boolean,
}

const AddPostBtn = ({is_full}: AddPostBtnProps) => {

    const btn = useRef<HTMLDivElement>()
    const navContext = useContext(NavContext)
    const [navElC] = useState<NavElC>(new NavElController(false))

    useEffect(() => {
        navElC.setEl(btn.current)

        navContext.pushToController(AppRoutes.ADD_POST, navElC)
    }, [])


    return (
        <Link to={AppRoutes.ADD_POST}>
            <div className={cn(
                'add-post-btn',
                {
                    'add-post-btn_full': is_full
                }
            )} ref={btn}>
                <div className={'add-post-btn__icon'}>
                </div>
                <div className={'add-post-btn__text'}>
                    <span>Создать</span>
                    <span>Новый пост</span>
                </div>
            </div>
        </Link>
    );
};

export default AddPostBtn;