import React from 'react';

import {EventType} from "shared/helpers/types/event";

import InfoBox from "./info-box";

import {classByType} from "../helpers/classByType";
import {textByType} from "../helpers/textByType";

type InfoProps = {
    title: string,
    type: EventType,
    location: string
}

const Info = ({location, type, title}:InfoProps) => {

    return (
        <div className={'events-now__info'}>
            <div className={'events-now__info-title'}>
                <span>{title}</span>
            </div>
            <div className={'events-now__info-below'}>
                <div className={'events-now__info-wrapper'}>
                    <InfoBox className={classByType(type)} text={textByType(type)}/>
                    <InfoBox className={'events-now__location'} text={location}/>
                </div>
                <div className={'events-now__info-btn'}>
                    <span>Подробнее</span>
                </div>
            </div>
        </div>
    );
};

export default Info;