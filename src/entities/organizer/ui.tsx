import React from 'react';

import './style/index.scss'

export type OrganizerProps = {
    id: string,
    img: string,
    name: string,
    surname: string,
    patronymic: string,
    type: 'Преподаватель',
    Message: React.ReactNode
}

const Organizer: React.FC<OrganizerProps> = (
    {
        type,
        id,
        surname,
        patronymic,
        name,
        img,
        Message
    }
) => {
    return (
        <div className={'event__organizer organizer'}>
            <div className={'organizer__img'}
                 style={{
                     backgroundImage: `url(${img})`
                 }}
            >
            </div>
            <div className={'organizer__info'}>
                <span className={'name'}>{`${surname} ${name}`}</span>
                <span className={'patronymic'}>{`${patronymic}`}</span>
                <span className={'type'}>{`${type}`}</span>
            </div>
            {
                Message
            }
        </div>
    );
};

export default React.memo(Organizer);