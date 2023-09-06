import React from 'react';
import {v4} from "uuid";

import {archiveResData} from "../data/arch";
import ArchiveEvent from "../../../entities/archive-event";
import EventTag from "../../../entities/event-tag";
import ViewsCount from "../../../entities/views-count";
import MiniInfo from "../../../entities/mini-info";
import LikeEvent from "../../../feature/like-event";
import ShareEvent from "../../../feature/share-event";
import CommentsEvent from "../../../feature/comments-event";
import EventComments from "../../../widgets/comments";
import {useArchiveStore} from "../zustand";

const EventsList = () => {

    const {data} = useArchiveStore()

    return (
        <div className={'events-list'}>
            {
                data && data.map(d => (
                    <ArchiveEvent
                        key={d.id}
                        id={d.id}
                        Tags={
                            <>
                                {
                                    d.tags.map(t => (
                                        <EventTag
                                            key={t.id}
                                            id={d.id}
                                            tag={t.tag}
                                        />
                                    ))
                                }
                            </>
                        }
                        LikeBtn={
                            /*<MiniInfo>
                                <LikeEvent
                                    event_id={d.id}
                                    likeCount={d.likesCount}
                                />
                            </MiniInfo>*/
                            null
                        }
                        ShareBtn={
                            /*<MiniInfo>
                                <ShareEvent
                                    eventId={d.id}
                                    shareCount={d.sharesCount}
                                />
                            </MiniInfo>*/
                            null
                        }
                        CommentBtn={
                            <MiniInfo>
                                <CommentsEvent
                                    eventId={d.id}
                                    commentsCount={d.comments.length}
                                />
                            </MiniInfo>
                        }
                        Comments={
                            <EventComments
                                eventId={d.id}
                                list={d.comments}
                            />
                        }
                        Views={
                            /*<ViewsCount
                                id={d.id}
                                count={d.viewCount}
                            />*/
                            null
                        }
                        orgImage={d.organizers[0]?.avatar}
                        title={d.title}
                        date={new Date(d.startDate)}
                        time={d.startTime.slice(0, 5)}
                        location={d.location}
                        description={d.description}
                        images={d.gallery}
                    />
                ))
            }
        </div>
    );
};

export default EventsList;