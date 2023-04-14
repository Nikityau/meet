import React from 'react';

import {EventType} from "shared/helpers/types/event";
import {neverCheck} from "shared/helpers/never-check";

import Like from "./like";
import TextBlock from "./text-block";

type InfoProps = {
    title: string,
    type: EventType,
    location: string,
    Like: React.ReactNode
}

const textByType = (type:'all' | 'staff'): string => {
    switch (type) {
        case "all":
            return 'Для всех'
        case "staff":
            return 'Для студентов и сотрудников'
        default:
            neverCheck(type)
    }
}

const classByType = (type:EventType): string => {
    switch (type) {
        case "all":
            return 'events-soon__type_all'
        case "staff":
            return 'events-soon__type_staff'
        default:
            neverCheck(type)
    }
}

const Info = ({title, location, type, Like}: InfoProps) => {
    return (
        <div className={'event-soon__info'}>
            { Like }
            <div className={'event-soon__text'}>
                <div className={'event-soon__title'}>
                    <span>{title}</span>
                    <div className={'event-soon__spec-text'}>
                        <TextBlock title={textByType(type)} className={classByType(type)}/>
                        <TextBlock title={location} className={'event-soon__location'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;