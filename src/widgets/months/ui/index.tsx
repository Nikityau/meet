import React, {useEffect} from 'react';

import {data} from "../model/month";

import Month from "./month";

import '../style/index.scss'

const Months = () => {

    return (
        <div className={'months'}>
            {
                data.map((el) => (
                    <Month
                        key={el.id}
                        number={el.number}
                        title={el.title}
                    />
                ))
            }
        </div>
    );
};

export default Months;