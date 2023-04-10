import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import cn from 'classnames'

import {AppRoutes} from "shared/routes/routes";

import './style/index.scss'

type AddPostBtnProps = {
    is_full: boolean,
    onClick: (el: HTMLElement) => void
}

const AddPostBtn = ({is_full, onClick}: AddPostBtnProps) => {

    const btn = useRef<HTMLDivElement>()

    const onClickBtn = () => {
        onClick(btn.current)
    }

    return (
        <Link to={AppRoutes.ADD_POST}>
            <div className={cn(
                'add-post-btn',
                {
                    'add-post-btn_full': is_full
                }
            )} ref={btn} onClick={onClickBtn}>
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