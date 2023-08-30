import React from 'react';
import cn from "classnames";

import './style/button.scss'

type ButtonProps = {
    theme?: 'purple' | 'red' | 'grey'
    onClick: () => void
} & React.PropsWithChildren

const Button = ({onClick, children, theme = 'purple'}:ButtonProps) => {
    return (
        <div className={cn('btn-ui', `btn-ui_theme_${theme}`)} onClick={onClick}>
            {children}
        </div>
    );
};

export default Button;