import React from 'react';

import './style/index.scss'

type SelectionProps = {
    id?: string,
    text: string
}

const Selection = ({text, id}: SelectionProps) => {
    return (
        <div className={'selection'}>
            <span>{text}</span>
        </div>
    );
};

export default Selection;