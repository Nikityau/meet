import React from 'react';
import cn from 'classnames'

type TextBlockProps = {
    title: string,
    className: string
}

const TextBlock = ({title, className}:TextBlockProps) => {
    return (
        <div className={cn('event-soon__text-block', className)}>
            <div className={'event-soon__icon'}>
            </div>
            <div className={'event-soon__t'}>
                <span>{title}</span>
            </div>
        </div>
    );
};

export default TextBlock;