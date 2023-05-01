import React from 'react';

import {useCreateEventNext} from "../helpers/hooks/useCreateEventNext";

const NextBtn = () => {

    const next = useCreateEventNext()

    const onClick = () => {
        next()
    }

    return (
        <div className={'next-btn'} onClick={onClick}>
            <span>Следующий шаг</span>
        </div>
    );
};

export default NextBtn;