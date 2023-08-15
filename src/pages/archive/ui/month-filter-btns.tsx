import React from 'react';

const MonthFilterBtns = () => {

    const onNext = () => {

    }

    const onPrev = () => {

    }

    return (
        <div className={'month-filter__btns'}>
            <div className={'month-filter__btn month-filter__btn_l'}
                 onClick={onPrev}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M10.1831 4.675L6.35811 8.5L10.1831 12.325L8.99977 13.5L3.99977 8.5L8.99977 3.5L10.1831 4.675Z" fill="#848A95"/>
                </svg>
            </div>
            <div className={'month-filter__btn month-filter__btn_r'}
                 onClick={onNext}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M10.1831 4.675L6.35811 8.5L10.1831 12.325L8.99977 13.5L3.99977 8.5L8.99977 3.5L10.1831 4.675Z" fill="#848A95"/>
                </svg>
            </div>
        </div>
    );
};

export default MonthFilterBtns;