import React from 'react';

import {useCreateEventNext} from "../../pages/create-post/helpers/hooks/useCreateEventNext";

import './style/index.scss'

const CreateEventNextButton = () => {
    const next = useCreateEventNext()

    const onClick = () => {
        next()
    }

    return (
        <div className={'create-event-next-btn'} onClick={onClick}>
            <span>Следующий шаг</span>
        </div>
    );
};

export default CreateEventNextButton;