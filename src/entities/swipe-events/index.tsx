import React from 'react';
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import {EventRes} from "../../pages/meet/helpers/hooks/use-today-events";

import 'swiper/css';
import 'swiper/css/pagination';

import './style/index.scss'

type SwipeEventsProps = {
    Event: React.FunctionComponent<EventRes>
    data: EventRes[]
}

const SwipeEvents = ({Event, data}: SwipeEventsProps) => {
    return (
        <div className={'swipe-events'}>
            <Swiper
                modules={[Pagination]}
                slidesPerView={'auto'}
                freeMode={true}
                pagination={true}

            >
                {
                   data && data.map(el => (
                        <SwiperSlide key={el.id}>
                            <Event
                                id={el.id}
                                title={el.title}
                                description={el.description}
                                tags={el.tags}
                                location={el.location}
                                startDate={el.startDate}
                                endDate={el.endDate}
                                gallery={el.gallery}
                                startTime={el.startTime}
                                organizers={el.organizers}
                                preview={el.preview}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default SwipeEvents;