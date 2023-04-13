import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import {eventsData} from "./model/data";

import {EventNow} from "features/event-now";

import 'swiper/css'
import './style/index.scss'

const EventsSlider = () => {
    return (
        <div className={'events-slider'}>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={50}
                freeMode={true}
            >
                {
                    eventsData.map(el => (
                        <SwiperSlide
                            key={el.id}
                        >
                            <EventNow
                                title={el.title}
                                type={el.type}
                                location={el.location}
                                time={el.time}
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