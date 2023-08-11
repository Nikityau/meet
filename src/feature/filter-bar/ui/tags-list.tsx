import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {tags} from "../data/tags";
import Selection from "../../../entities/selection";

const TagsList = () => {
    return (
        <div className={'filter-bar__tags-list'}>
            <Swiper
                slidesPerView={'auto'}
            >
                {
                    tags.map(d => (
                        <SwiperSlide key={d.id}>
                            <div className={'filter-bar__tag'}>
                                <Selection
                                    text={d.selection}
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default TagsList;