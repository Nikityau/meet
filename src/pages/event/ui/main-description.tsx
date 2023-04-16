import React from 'react';

import Like from "features/like";

import img from '../assets/event.png'

const MainDescription = () => {
    return (
        <div className={'event__main-description'}>
            <div className={'event__image'}
                 style={{
                     backgroundImage: `url(${img})`
                 }}
            >
                <Like/>
            </div>
            <div className={'event__below'}>
                <div className={'event__title'}>
                    <span>День открытых дверей РГУПС </span>
                </div>
                <div className={'event__description-text'}>
                    <p>
                        Рады сообщить Вам, что 18 декабря в стенах РГУПС состоится День открытых дверей!
                    </p>
                    <p>
                        У вас есть уникальная возможность более подробно познакомиться с информацией о специальностях и
                        направлениях подготовки нашего университета, задать любые интересующие вас вопросы сотрудникам
                        факультетов и приемной комиссии!
                    </p>
                    <p>
                        После общего ознакомления с информацией о специальностях, все желающие могут познакомиться с
                        деканами факультетов и принять участие в увлекательных экскурсиях по лабораториям университета,
                        а в заключение пройти профориентационное тестирование.
                    </p>
                    <p>
                        Будет очень интересно, ждем именно тебя!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainDescription;