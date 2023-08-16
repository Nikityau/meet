import React from 'react';
import {ArchiveData} from "./data/archive-data";

export type ArchiveEventProps = {
    Tags: React.ReactNode,
    LikeBtn: React.ReactNode,
    ShareBtn: React.ReactNode,
    CommentBtn: React.ReactNode,
    Comments: React.ReactNode,
    Views: React.ReactNode
} & ArchiveData

import ArchiveEventHeader from "./ui/header";
import Description from "./ui/description";
import Images from "./ui/images";
import InfoBlock from "./ui/info-block";

import './style/index.scss'

const ArchiveEvent = (
    {
        date,
        CommentBtn,
        Comments,
        LikeBtn,
        orgImage,
        ShareBtn,
        Tags,
        images,
        time,
        location,
        title,
        description,
        Views,
        id
    }: ArchiveEventProps) => {
    return (
        <div className={'archive-event'}>
            <div className={'archive-event__container'}>
                <ArchiveEventHeader
                    orgImage={orgImage}
                    date={date}
                    time={time}
                    location={location}
                    title={title}
                    Views={Views}
                />
                <Description description={description}/>
                <Images images={images}/>
            </div>
            <InfoBlock
                ShareBtn={ShareBtn}
                Tags={Tags}
                LikeBtn={LikeBtn}
                CommentBtn={CommentBtn}
            />
            {
                Comment
                    ? <div className={'archive-event__container'}>
                        {
                            Comments
                        }
                    </div>
                    : null
            }
        </div>
    );
};

export default ArchiveEvent;