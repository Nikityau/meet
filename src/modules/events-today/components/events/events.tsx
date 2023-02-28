import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css'
import './style/events.scss'

const Events = () => {
    return (
        <div className={'events-today__events'}>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                freeMode={true}
            >
                <SwiperSlide>
                    <div className={'events-today__event'}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'events-today__event'}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'events-today__event'}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'events-today__event'}></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Events;