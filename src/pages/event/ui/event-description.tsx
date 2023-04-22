import React from 'react';

import Block from "entities/block";
import {Comments} from "widgets/comments";
import {UserComment} from "features/user-comment";

import {useEventData} from "../zustand";

import MainDescription from "./main-description";
import SimilarEvents from "./similar-events";
import SimilarCategories from "./similar-categories";

const EventDescription = () => {

    const {event} = useEventData()

    const onComment = (e) => {

    }

    return (
        <div className={'event__description'}>
            <div className={'event__main-info'}>
                <MainDescription
                    id={event.id}
                    title={event.title}
                    img={event.img}
                    description={event.description}
                />
                <Comments
                    comments={event.comments}
                    UserComment={
                        <UserComment onComment={onComment}/>
                    }
                />
            </div>
            <Block
                title={'Похожие категории'}
                block={
                    <SimilarCategories
                        categories={event.similarCategory}
                    />
                }
            />
            <Block
                title={'Похожие события'}
                block={<SimilarEvents/>}
            />
        </div>
    );
};

export default EventDescription;