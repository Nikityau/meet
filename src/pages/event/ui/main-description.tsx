import React from 'react';
import {nanoid} from "nanoid";

import Like from "features/like";

type MainDescriptionProps = {
    id: string
    img: string,
    title: string
    description: string
}

const MainDescription = React.memo(({description, title, img, id}:MainDescriptionProps) => {
    return (
        <div className={'event__main-description'}>
            <div className={'event__image'}
                 style={{
                     backgroundImage: `url(${img})`
                 }}
            >
                <Like
                    id={id}
                    isLiked={false}
                />
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