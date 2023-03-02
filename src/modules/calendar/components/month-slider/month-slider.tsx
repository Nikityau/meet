import React from 'react';

import {useMonthSlider} from "../../helpers/hooks/useMonthSlider";

import './style/month-slider.scss'

const MonthSlider = () => {

    const data = useMonthSlider()

    return (
        <div className={'month-slider'}
            style={{
                width: `${data?.clientWidth}px`,
                transform: `translate(${data?.offsetLeft}px, -50%)`
            }}
        >
        </div>
    );
};

export default MonthSlider;