import React from 'react';

interface ICircle {
    number: number
}

const Circle: React.FC<ICircle> = ({number}) => {
    return (
        <div className={'create-event-stage__circle'}>
            <span>{number}</span>
        </div>
    );
};

export default Circle;