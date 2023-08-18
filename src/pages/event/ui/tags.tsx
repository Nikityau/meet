import React from 'react';
import {event} from "../data/event";
import EventTag from "../../../entities/event-tag";
import {v4} from "uuid";

const Tags = () => {
    return (
        <div className={'event-tags'}>
            <div className={'event-tags__title'}>
                <span>Теги</span>
            </div>
            <div className={'event-tags__list'}>
                {
                    event.tags.map(d => {
                        const id = v4()

                        return (
                            <EventTag
                                key={id}
                                id={id}
                                tag={d}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Tags;