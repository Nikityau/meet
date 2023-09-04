import React from 'react';
import {v4} from "uuid";
import {useFilterMeet} from "../../../local-states/filter-meet";
import {DateG} from "../../../shared/helpers/date-g";
import {Swiper, SwiperSlide} from "swiper/react";
import FaBar from "./fa-bar";

import 'swiper/css'

const FiltersApplied = () => {

    const {filters, dispatch} = useFilterMeet()

    const onClickBtn = () => {
        dispatch({
            type: "filterMeet/clear",
            payload: null
        })
    }

    const onDateClick = (date: Date) => {
        dispatch({
            type: "filterMeet/dates-remove",
            payload: date
        })
    }

    const onTagClick = (tag: string) => {
        dispatch({
            type: "filterMeet/tags-remove",
            payload: tag
        })
    }

    const onLocationClick = () => {
        dispatch({
            type: "filterMeet/location",
            payload: null
        })
    }

    return (
        <div className={'filters-applied'}>
            <div className={'filters-applied__btn'} onClick={onClickBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 1L1 13M1 1L13 13" stroke="black"/>
                </svg>
            </div>
            <div className={'filters-applied__list'}>
                <Swiper
                    slidesPerView={'auto'}
                >
                    {
                        filters.dates != null && filters.dates.map(d => (
                            <SwiperSlide
                                key={v4()}
                            >
                                <FaBar
                                    filterText={DateG.getNormalStr(d)}
                                    onClick={() => onDateClick(d)}
                                />
                            </SwiperSlide>
                        ))
                    }
                    {
                        filters.tags != null && filters.tags.map(t => (
                            <SwiperSlide
                                key={v4()}
                            >
                                <FaBar
                                    filterText={t}
                                    onClick={() => onTagClick(t)}
                                />
                            </SwiperSlide>
                        ))
                    }
                    {
                        filters.location &&
                        <SwiperSlide
                            key={v4()}
                        >
                            <FaBar
                                filterText={filters.location}
                                onClick={onLocationClick}
                            />
                        </SwiperSlide>
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default FiltersApplied;