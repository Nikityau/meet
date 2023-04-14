import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import {Event} from "./model/data";
import Like from "features/like";

import {EventProps} from "features/event-now";

import 'swiper/css'
import './style/index.scss'

type EventsSliderProps = {
    data: Event[],
    Component: React.FunctionComponent<EventProps>
}

const EventsSlider = ({Component, data}: EventsSliderProps) => {
    return (
        <div className={'events-slider'}>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={19}
                freeMode={true}
            >
                {
                    data.map(el => (
                        <SwiperSlide
                            key={el.id}
                        >
                            <Component
                                time={el.time}
                                title={el.title}
                                location={el.location}
                                type={el.type}
                                img={el.img}
                                link={el.link}
                                Like={<Like/>}
                                />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default EventsSlider;