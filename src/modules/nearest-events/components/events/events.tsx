import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css'
import './style/event.scss'

const Events = () => {
    return (
        <div className={'nearest-events__events'}>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                freeMode={true}
            >
                <SwiperSlide>
                    <div className={'nearest-events__event'}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'nearest-events__event'}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'nearest-events__event'}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'nearest-events__event'}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'nearest-events__event'}></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Events;