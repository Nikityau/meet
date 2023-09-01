import React from 'react';
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import Selection from "../../../entities/selection";
import {tagsSelector} from "../../../redux/tags-store/tags-selector";

const TagsList = () => {

    const tags = useSelector(tagsSelector)

    const onTagClick = (tag: string) => {

    }

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
                                    text={d.tag}
                                    isChosen={false}
                                    onClick={() => onTagClick(d.tag)}
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