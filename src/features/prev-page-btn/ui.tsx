import React from 'react';
import {useNavigate} from 'react-router-dom'

import {HistoryController} from "pages/base/model";

import './style/index.scss'

const PrevPageBtn = () => {

    const nav = useNavigate()

    const onGoBack = () => {
        nav(HistoryController.goPrev())
    }

    return (
        <div className={'prev-page-btn'} onClick={onGoBack}>
            <span>Назад</span>
        </div>
    );
};

export default PrevPageBtn;