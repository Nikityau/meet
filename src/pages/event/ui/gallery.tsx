import React from 'react';
import {v4} from "uuid";
import {Swiper, SwiperSlide} from "swiper/react";
import {event} from "../data/event";

import 'swiper/css';

const Gallery = () => {
    return (
        <div className={'event-gallery'}>
            <div className={'event-gallery__title'}>
                <span>Галерея</span>
            </div>
            <div className={'event-gallery__list'}>
                <Swiper
                    slidesPerView={1}
                    freeMode={true}
                >
                    {
                        event.images.map((d, i)   => (
                            <SwiperSlide
                                key={i}
                            >
                                <div className={'event-gallery__img'}
                                    style={{
                                        backgroundImage: `url(${d})`
                                    }}
                                >
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Gallery;