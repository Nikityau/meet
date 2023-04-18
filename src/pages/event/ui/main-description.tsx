import React from 'react';

import Like from "features/like";

import {nanoid} from "nanoid";

type MainDescriptionProps = {
    img: string,
    title: string
    description: string
}

const MainDescription = React.memo(({description, title, img}:MainDescriptionProps) => {
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
                    <span>{title}</span>
                </div>
                <div className={'event__description-text'}>
                    {
                        description.split('\n').filter(el => el.length > 0).map(el => (
                            <p key={nanoid()}>{el}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
})

export default MainDescription;