import React, {useState} from 'react';

type TimeNumProps = {
    num: number,
    x: number,
    y: number,
    onTimeClick: (num: number) => void
}

const TimeNum: React.FC<TimeNumProps> = ({num, x, y, onTimeClick}) => {

    const onClick = () => {
        onTimeClick(num)
    }

    return (
        <div className={'square-clock__time-num'}
            style={{
                top: x + 'px',
                left: y + 'px'
            }}
             onClick={onClick}
        >
            <span>{num}</span>
        </div>
    );
};

export default TimeNum;