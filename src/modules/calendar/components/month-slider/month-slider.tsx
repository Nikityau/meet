import React from 'react';

import {useMonthSlider} from "../../helpers/hooks/useMonthSlider";

import './style/month-slider.scss'

const MonthSlider = () => {

    const offsetLeft = useMonthSlider()

    return (
        <div className={'month-slider'}
            style={{
                transform: `translate(${offsetLeft}px, -13%)`
            }}
        >
        </div>
    );
};

export default MonthSlider;