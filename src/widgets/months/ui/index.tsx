import React, {useEffect} from 'react';

import {data} from "../model/month";

import Month from "./month";
import Line from "./line";

import ContextProvider from "../providers/context";

import '../style/index.scss'

const Months = () => {
    return (
        <ContextProvider>
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
                <Line/>
            </div>
        </ContextProvider>
    );
};

export default Months;