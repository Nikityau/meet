import React from 'react';


type EventsBlockProps = {
    title: string
    block: React.ReactNode
}

const Block = ({title, block}:EventsBlockProps) => {
    return (
        <div className={'events-block'}>
            <div className={'events-block__title'}>
                <span>{title}</span>
            </div>
            { block }
        </div>
    );
};

export default Block;