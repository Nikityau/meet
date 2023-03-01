import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css'
import './style/event-swiper.scss'

type HasId = {
    id: string
}

type EventSwiperProps = {
    Element: React.FunctionComponent,
    data: HasId[]
}

const EventSwiper = ({Element, data}: EventSwiperProps) => {

    return (
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={20}
            freeMode={true}
            className={'event-swiper'}
        >
            {
                data.map(el => (
                    <SwiperSlide key={el.id}>
                        <Element/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default EventSwiper;