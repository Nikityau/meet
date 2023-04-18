import React, {useEffect, useState} from 'react';

import {data} from "../model/month";

import Month from "./month";
import Line from "./line";

import {useLeftOffset} from "../helpers/hooks/useLeftOffset";
import {IElOffsetHandler} from "shared/helpers/controller/handler-controller";

import '../style/index.scss'

export const MonthContext = React.createContext<{
    offset: number
    pushMonthController: (key: number, controller:IElOffsetHandler) => void
}>(null)

const Months = () => {

    const {offset, push} = useLeftOffset()

    return (
        <MonthContext.Provider value={{
            offset,
            pushMonthController: push
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