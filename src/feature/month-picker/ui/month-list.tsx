import React from 'react';
import {v4} from "uuid";
import Month from "./month";
import {isMobile} from "react-device-detect";
import {Swiper, SwiperSlide} from "swiper/react";

const months = Array.from({ length: 12 }, (_, i) => {
    _ = {}
    _['uid'] = v4()

    return _
})

const MonthList = () => {
    return (
        <div className={'month-picker__month-list'}>
            {
                isMobile
                    ?
                    <Swiper
                        slidesPerView={5}
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
                    :
                    months.map((el, i) => (
                    <Month
                        month={i}
                        key={el['uid']}
                    />
                ))
            }
        </div>
    );
};

export default MonthList;