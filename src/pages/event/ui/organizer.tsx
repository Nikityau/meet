import React from 'react';

export type OrganizerProps = {
    id: string,
    img: string,
    name: string,
    surname: string,
    patronymic: string,
    type: 'Преподаватель',
    canMessage: boolean
}

const Organizer = ({
    img,
    type,
    name,
    surname,
    patronymic,
    canMessage,
    id
}: OrganizerProps) => {
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
                canMessage &&
                <div className={'organizer__msg'}>
                </div>
            }
        </div>
    );
};

export default Organizer;