import React from 'react';

import {dataMonths} from "../../data/data-months";

import Month from "../month/month";
import MonthSlider from "../month-slider/month-slider";

import './style/months.scss'

const Months = () => {
    return (
        <div className={'months'}>
            {
                dataMonths.map(el => (
                    <Month
                        key={el.id}
                        title={el.title}
                        number={el.number}
                    />
                ))
            }
            <MonthSlider/>
        </div>
    );
};

export default Months;