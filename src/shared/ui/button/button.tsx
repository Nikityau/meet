import React from 'react';

import './style/button.scss'

type ButtonProps = {
    text: string,
    onClick: () => void
}

const Button = ({onClick, text}:ButtonProps) => {
    return (
        <div className={'btn-ui'} onClick={onClick}>
            <span>{text}</span>
        </div>
    );
};

export default Button;