import React from 'react';
import {v4} from "uuid";

import {archiveResData} from "../data/arch";
import ArchiveEvent from "../../../entities/archive-event";
import EventTag from "../../../entities/event-tag";
import ViewsCount from "../../../entities/views-count";
import DoSmthEv from "../../../entities/do-smth-ev";

const EventsList = () => {
    return (
        <div className={'events-list'}>
            {
                archiveResData.map(d => (
                    <ArchiveEvent
                        key={d.id}
                        id={d.id}
                        Tags={
                            <>
                                {
                                    d.tags.map(t => (
                                        <EventTag
                                            key={v4()}
                                            id={d.id}
                                            tag={t}
                                        />
                                    ))
                                }
                            </>
                        }
                        LikeBtn={
                            <DoSmthEv/>
                        }
                        ShareBtn={
                            <DoSmthEv/>
                        }
                        CommentBtn={
                            <DoSmthEv/>
                        }
                        Comments={null}
                        Views={
                            <ViewsCount
                                id={d.id}
                                count={d.viewCount}
                            />
                        }
                        orgImage={d.orgImage}
                        title={d.title}
                        date={d.date}
                        time={d.time}
                        location={d.location}
                        description={d.description}
                        images={d.images}
                    />
                ))
            }
        </div>
    );
};

export default EventsList;