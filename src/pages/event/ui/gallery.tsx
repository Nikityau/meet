import React from 'react';
import {Pagination} from "swiper";
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
                    modules={[Pagination]}
                    freeMode={true}
                    pagination={true}
                    spaceBetween={10}
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