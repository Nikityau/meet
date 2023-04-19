import React from 'react';
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from 'react-router-dom'

import {getAllUserInfo} from "../user";
import {useAppLocationStore} from "../../pages/base/model";
import {AppRoutes} from "../../shared/routes/routes";

import './style/index.scss'

const PrevPageBtn = () => {
    //@ts-ignore
    const {current, prev} = useAppLocationStore()

    const user = useSelector(getAllUserInfo)
    const nav = useNavigate()

    const onGoBack = () => {
        if(!prev) {
            nav(AppRoutes.EVENTS)
            return
        }

        if(user) {
            nav(prev)

            return;
        } else {
            nav(AppRoutes.EVENTS)
            return;
        }
    }

    return (
        <div className={'prev-page-btn'} onClick={onGoBack}>
            <span>Назад</span>
        </div>
    );
};

export default PrevPageBtn;