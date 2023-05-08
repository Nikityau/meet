import React from 'react';

import arrow_img from '../assets/arrow.png'

type F = () => void

type ControlArrowsProps = {
    prev: F,
    next: F
}

const ControlArrows: React.FC<ControlArrowsProps> = (
    {
        next,
        prev
    }
) => {
    return (
        <div className={'square-calendar__control-arrows'}>
            <div className={'square-calendar__control-arrows__prev'}
                onClick={prev}
            >
                <img src={arrow_img} alt={'arrow'}/>
            </div>
            <div className={'square-calendar__control-arrows__next'}
                onClick={next}
            >
                <img src={arrow_img} alt={'arrow'}/>
            </div>
        </div>
    );
};

export default ControlArrows;