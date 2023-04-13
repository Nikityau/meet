import React from 'react';
import cn from 'classnames'

type InfoBoxProps = {
    className
    text: string
}

const InfoBox = ({text, className}:InfoBoxProps) => {
    return (
        <div className={cn('events-now__info-box', className)}>
            <div className={'events-now__info-box-icon'}></div>
            <div className={'events-now__info-box-text'}>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default InfoBox;