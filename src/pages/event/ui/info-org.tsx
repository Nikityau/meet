import React from 'react';
import {event} from "../data/event";

const InfoOrg = () => {
    return (
        <div className={'info-org'}>
            <div className={'info-org__image'}
                style={{
                    backgroundImage: `url(${event.org.img})`
                }}
            >
            </div>
            <div className={'info-org__info'}>
                <div className={'info-org__name'}>
                    <span>{event.org.name + ' ' + event.org.surname}</span>
                </div>
                <div className={'info-org__role'}>
                    <span>{event.org.role}</span>
                </div>
            </div>
        </div>
    );
};

export default InfoOrg;