import React from 'react';
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {event} from "../data/event";
import {useEventStore} from "../zustand";

import 'swiper/css';

const Gallery = () => {

    const {data} = useEventStore()

    return (
        <div className={'event-gallery'}>
            <div className={'event-gallery__title'}>
                <span>Галерея</span>
            </div>
            <div className={'event-gallery__list'}>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    freeMode={true}
                    pagination={true}
                >
                    {
                        data &&  data.gallery.map((d, i)   => (
                            <SwiperSlide
                                key={d.id}
                            >
                                <div className={'event-gallery__img'}
                                    style={{
                                        backgroundImage: `url(${d.img})`
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