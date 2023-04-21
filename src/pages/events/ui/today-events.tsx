import React from 'react';
import {SwiperSlide} from "swiper/react";

import Like from "features/like";

import {eventsData, EventsSlider} from "entities/events-slider";
import {Event, EventInfoToday, EventPreview} from "entities/event";
import EventDate from "entities/event-date";
import DetailBtn from "../../../features/detail-btn";

const TodayEvents = () => {

    return (
        <EventsSlider>
            {
                eventsData.map(event => (
                    <SwiperSlide key={event.id}>
                        <Event
                            id={event.id}
                            type={'today'}
                            Preview={
                                <EventPreview
                                    Like={
                                        <Like id={event.id} isLiked={false}/>
                                    }
                                    Date={
                                        <EventDate date={event.time}/>
                                    }
                                    previewImg={event.img}
                                />
                            }
                            Info={
                                <EventInfoToday
                                    DetailBtn={
                                        <DetailBtn
                                            id={event.id}
                                        />
                                    }
                                    location={event.location}
                                    type={event.type}
                                    title={event.title}
                                />
                            }
                        />
                    </SwiperSlide>
                ))
            }
        </EventsSlider>
    );
};

export default TodayEvents;