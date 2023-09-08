import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Month from "../ui/month";

import {months} from "../ui/month-list";

const MonthListMobile = () => {

    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={40}
                onInit={(swiper) => {
                    const date = new Date()

                    swiper.slideTo(date.getMonth())
                }}
            >
                {
                    months.map((el, i) => (
                        <SwiperSlide
                            key={el['uid']}
                        >
                            <Month
                                month={i}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default MonthListMobile;