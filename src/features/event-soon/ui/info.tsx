import React from 'react';

import {EventType} from "shared/helpers/types/event";

import TextBlock from "./text-block";
import {classByType, textByType} from "../helpers/helpers";

type InfoProps = {
    title: string,
    type: EventType,
    location: string,
    Like: React.ReactNode
}



const Info = ({title, location, type, Like}: InfoProps) => {
    return (
        <div className={'event-soon__info'}>
            { Like }
            <div className={'event-soon__text'}>
                <div className={'event-soon__title'}>
                    <span>{title}</span>
                    {
                        location && type &&
                        <div className={'event-soon__spec-text'}>
                            <TextBlock title={textByType(type)} className={classByType(type)}/>
                            <TextBlock title={location} className={'event-soon__location'}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Info;