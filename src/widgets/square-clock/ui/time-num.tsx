import React, {useState} from 'react';

type TimeNumProps = {
    num: number,
    x: number,
    y: number
}

const TimeNum: React.FC<TimeNumProps> = ({num, x, y}) => {

    return (
        <div className={'square-clock__time-num'}
            style={{
                transform: `translate(${x}px, ${y}px)`
            }}
        >
            <span>{num}</span>
        </div>
    );
};

export default TimeNum;