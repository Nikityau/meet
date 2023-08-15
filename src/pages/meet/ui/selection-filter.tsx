import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import Selection from "../../../entities/selection";
import {tags} from "../../../shared/data/tags";

const SelectionFilter = () => {
    return (
        <div className={'selections-filter'}>
            <Swiper
                slidesPerView={'auto'}
            >
                {
                    tags.map(d => (
                        <SwiperSlide
                            key={d.id}
                        >
                            <div className={'selections-filter__bar'}>
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

export default SelectionFilter;