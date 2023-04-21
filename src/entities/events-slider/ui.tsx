import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";


import 'swiper/css'
import './style/index.scss'

type EventsSliderProps = {

} & React.PropsWithChildren

const EventsSlider = ({children}: EventsSliderProps) => {

    return (
        <div className={'events-slider'}>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={19}
                freeMode={true}
            >
                {
                    children
                }
            </Swiper>
        </div>
    );
};

export default EventsSlider;