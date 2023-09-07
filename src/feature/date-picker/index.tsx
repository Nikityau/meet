import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import DateTablet from "./ui/date-tablet";
import {useDatePicker} from "./helpers/hooks/use-date-picker";

import './style/index.scss'
import 'swiper/css'
import {isMobile} from "react-device-detect";

type DatePickerProps = {

}

const DatePicker = ({}: DatePickerProps) => {

    const {dates} = useDatePicker()

    return (
        <div className={'date-picker'}>
            <Swiper
                slidesPerView={isMobile ? 8 : 'auto'}
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