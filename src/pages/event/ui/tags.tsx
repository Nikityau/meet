import React from 'react';
import EventTag from "../../../entities/event-tag";
import {useEventStore} from "../zustand";

const Tags = () => {

    const {data} = useEventStore()

    return (
        <div className={'event-tags'}>
            <div className={'event-tags__title'}>
                <span>Теги</span>
            </div>
            <div className={'event-tags__list'}>
                {
                    data && data.tags.map(d => {
                        return (
                            <EventTag
                                key={d.tag}
                                id={d.tag}
                                tag={d.tag}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Tags;