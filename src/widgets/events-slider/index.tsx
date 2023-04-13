import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import {Event, eventsData} from "./model/data";

import {EventProps} from "../../features/event-now/ui";

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
                spaceBetween={50}
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
                                />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default EventsSlider;