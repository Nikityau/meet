import React from 'react';
import {SwiperSlide} from "swiper/react";

import Like from "features/like";

import {eventsData, EventsSlider} from "entities/events-slider";
import {Event, EventInfoSoon, EventPreview} from "entities/event";
import EventDate from "entities/event-date";

const EventsSoon = () => {
    return (
        <EventsSlider>
            {
                eventsData.map(event => (
                    <SwiperSlide key={event.id}>
                        <Event
                            id={event.id}
                            type={'soon'}
                            Preview={
                                <EventPreview
                                    Like={null}
                                    Date={
                                        <EventDate date={'20 марта'}/>
                                    }
                                    previewImg={event.img}
                                />
                            }
                            Info={
                                <EventInfoSoon
                                    Like={
                                        <Like
                                            id={event.id}
                                            isLiked={false}
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

export default EventsSoon;