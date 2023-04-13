import React, {useEffect, useState} from 'react';
import {neverCheck} from "shared/helpers/never-check";
import cn from 'classnames'

type InfoProps = {
    title: string,
    type: 'all' | 'staff',
    location: string
}

const classByType = (type:'all' | 'staff'): string => {
    switch (type) {
        case "all":
            return 'events-now__type_all'
        case "staff":
            return 'events-now__type_staff'
        default:
            neverCheck(type)
    }
}

const textByType = (type:'all' | 'staff'): string => {
    switch (type) {
        case "all":
            return 'ДЛЯ ВСЕХ'
        case "staff":
            return 'ДЛЯ СТУДЕНТОВ И СОТРУДНИКОВ'
        default:
            neverCheck(type)
    }
}

const Info = ({location, type, title}:InfoProps) => {

    return (
        <div className={'events-now__info'}>
            <div className={'events-now__info-title'}>
                <span>{title}</span>
            </div>
            <div className={'events-now__info-below'}>
                <div className={'events-now__info-wrapper'}>
                    <div className={cn(
                        'events-now__info-type',
                        classByType(type)
                    )}>
                        <div className={'events-now__icon'}>
                        </div>
                        <div className={'events-now__text'}>
                            <span>{ textByType(type) }</span>
                        </div>
                    </div>
                    <div className={'events-now__info-location'}>
                        <div className={'events-now__icon'}>
                        </div>
                        <div className={'events-now__text'}>
                            <span>{location}</span>
                        </div>
                    </div>
                </div>
                <div className={'events-now__info-btn'}>
                    <span>Подробнее</span>
                </div>
            </div>
        </div>
    );
};

export default Info;