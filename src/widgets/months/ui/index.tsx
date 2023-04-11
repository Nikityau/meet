import React, {useEffect, useState} from 'react';

import {data} from "../model/month";

import Month from "./month";
import Line from "./line";

import {useLeftOffset} from "../helpers/hooks/useLeftOffset";
import {IMonthController} from "../controller/month-controller";

import '../style/index.scss'

export const MonthContext = React.createContext<{
    offset: number
    pushMonthController: (key: number, controller:IMonthController) => void
}>(null)

const Months = () => {

    const {offset, pushController} = useLeftOffset()

    return (
        <MonthContext.Provider value={{
            offset,
            pushMonthController: pushController
        }}>
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
        </MonthContext.Provider>
    );
};

export default Months;