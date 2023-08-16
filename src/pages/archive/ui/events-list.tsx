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
                            <MiniInfo>
                                <LikeEvent
                                    event_id={d.id}
                                    likeCount={d.likesCount}
                                />
                            </MiniInfo>
                        }
                        ShareBtn={
                            <MiniInfo>
                                <ShareEvent
                                    eventId={d.id}
                                    shareCount={d.sharesCount}
                                />
                            </MiniInfo>
                        }
                        CommentBtn={
                            <MiniInfo>
                                <CommentsEvent
                                    eventId={d.id}
                                    commentsCount={d.commentsCount}
                                />
                            </MiniInfo>
                        }
                        Comments={
                            <>
                                {
                                    d.commentsCount > 0
                                        ?
                                        <EventComments
                                            eventId={d.id}
                                            list={d.comments}
                                        />
                                        : null
                                }
                            </>
                        }
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