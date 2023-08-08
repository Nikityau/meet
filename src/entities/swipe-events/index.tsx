import React from 'react';
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import {EventPreviewNowProps} from "../event-preview-now";

import 'swiper/css';
import 'swiper/css/pagination';
import './style/index.scss'


type SwipeEventsProps = {
    Event: React.FunctionComponent<EventPreviewNowProps>
    data: EventPreviewNowProps[]
}

const SwipeEvents = ({Event, data}: SwipeEventsProps) => {
    return (
        <div className={'swipe-events'}>
            <Swiper
                modules={[Pagination]}
                className={'custom-swiper-styles'}
                pagination={true}
            >
                {
                    data.map(el => (
                        <SwiperSlide key={el.id}>
                            <Event
                                title={el.title}
                                date={el.date}
                                month={el.month}
                                time={el.time}
                                location={el.location}
                                categories={el.categories}
                                img={el.img}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default SwipeEvents;