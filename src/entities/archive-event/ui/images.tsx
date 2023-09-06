import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {v4} from "uuid";
import {Pagination} from "swiper";

type ImagesProps = {
    images: string[]
}

const Images = ({images}: ImagesProps) => {
    return (
        <div className={'archive-event-images'}>
            <Swiper
                modules={[Pagination]}
                slidesPerView={'auto'}
                pagination={true}
            >
                {
                    images.map(i => (
                        <SwiperSlide
                            key={v4()}
                        >
                            <div className={'archive-event-images__image'}
                                 style={{
                                     backgroundImage: `url(${i['img']})`
                                 }}
                            >
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Images;