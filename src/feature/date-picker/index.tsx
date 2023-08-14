import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import {useCalendar} from "../../shared/helpers/hooks/useCalendar";
import {DateG} from "../../shared/helpers/date-g";
import DateTablet from "./ui/date-tablet";

import './style/index.scss'
import 'swiper/css'

type DatePickerProps = {
    month: number
}

const DatePicker = ({month}: DatePickerProps) => {

    const dates = useCalendar(DateG.createDate(month), false)

    return (
        <div className={'date-picker'}>
            <Swiper
                slidesPerView={'auto'}
            >
                {
                    dates.map(d => (
                        <SwiperSlide
                            key={d['uid']}
                        >
                            <DateTablet
                                date={d}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default DatePicker;