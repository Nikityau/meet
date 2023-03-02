import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {userLogin} from "../../../../features/user";

import './style/login-style.scss'
import EventEmitter from "../../../../helpers/event/event-emitter";

const LoginBtn = () => {

    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(userLogin())
        EventEmitter.emit('nav-slide-again')
    }

    return (
        <div className={'login-btn'}>
            <div className={'login-btn__btn'}
                 onClick={onClick}>
                <span>Войти</span>
                <div className={'login-btn__hovered'}></div>
            </div>
        </div>
    );
};

export default LoginBtn;