import React from 'react';

import {dataMonths} from "../../data/data-months";

import Month from "../month/month";

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
        </div>
    );
};

export default Months;