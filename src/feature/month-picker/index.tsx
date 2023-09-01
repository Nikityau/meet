import React from 'react';

import MonthPickerProvider from "./provider/context";
import MonthList from "./ui/month-list";
import MonthPointer from "./ui/month-pointer";

import './style/index.scss'

const MonthPicker = () => {
    return (
        <MonthPickerProvider>
            <div className={'month-picker'}>
                <MonthList/>
                <MonthPointer/>
            </div>
        </MonthPickerProvider>
    );
};

export default MonthPicker;