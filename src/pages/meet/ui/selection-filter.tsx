import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import Selection from "../../../entities/selection";
import {tags} from "../../../shared/data/tags";
import {useFilterMeet} from "../../../local-states/filter-meet";

const SelectionFilter = () => {

    const {setFilter} = useFilterMeet()

    const onClick = (tag: string) => {
        setFilter({
            type: "filterMeet/tags-add",
            payload: tag
        })
    }

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
                                    onClick={() => onClick(d.selection)}
                                    isChosen={false}
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