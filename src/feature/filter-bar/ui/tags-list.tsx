import React from 'react';
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import Selection from "../../../entities/selection";
import {tagsSelector} from "../../../redux/tags-store/tags-selector";
import {useFilterBarStore} from "../zustand";

const TagsList = () => {

    const tags = useSelector(tagsSelector)

    const {filters, dispatch} = useFilterBarStore()

    const isChosen = (tag: string): boolean => {
        if(filters != null && filters.tags != null) {
            for(let t of filters.tags) {
                if(t == tag) {
                    return true
                }
            }
        }

        return false
    }

    const onTagClick = (tag: string, isChosen: boolean) => {
        if(isChosen) {
            dispatch({
                type: "filterMeet/tags-remove",
                payload: tag
            })

            return
        }

        dispatch({
            type: "filterMeet/tags-add",
            payload: tag
        })
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
                                    isChosen={isChosen(d.tag)}
                                    onClick={onTagClick}
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