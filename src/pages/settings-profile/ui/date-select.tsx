import React from 'react';
import Select from "../../../widgets/select";

const DateSelect = () => {
    const onDayChange = () => {

    }

    const onMonthChange = () => {

    }

    const onYearChange = () => {

    }

    return (
        <div className={'date-select'}>
            <Select
                init={'1'}
                options={['']}
                width={'auto'}
                onChange={onDayChange}
            />
            <Select
                init={'1'}
                options={['']}
                width={'auto'}
                onChange={onMonthChange}
            />
            <Select
                init={'1'}
                options={['']}
                width={'auto'}
                onChange={onYearChange}
            />
        </div>
    );
};

export default DateSelect;