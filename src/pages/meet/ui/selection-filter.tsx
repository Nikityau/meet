import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import {selectionsData} from "../data/selections";
import Selection from "../../../entities/selection";

const SelectionFilter = () => {
    return (
        <div className={'selections-filter'}>
            <Swiper
                slidesPerView={'auto'}
            >
                {
                    selectionsData.map(d => (
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