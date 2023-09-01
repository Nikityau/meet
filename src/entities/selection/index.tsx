import React from 'react';
import cn from "classnames";

import './style/index.scss'

type SelectionProps = {
    id?: string,
    text: string,
    isChosen: boolean,
    onClick: (tag: string, isChosen) => void
}

const Selection = ({text, isChosen,onClick,id}: SelectionProps) => {
    return (
        <div className={cn('selection', isChosen ? 'selection__chosen' : '')} onClick={() => onClick(text, isChosen)}>
            <span>{text}</span>
        </div>
    );
};

export default Selection;