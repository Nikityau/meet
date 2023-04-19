import React, {useState} from 'react';
import {useSelector} from "react-redux";
import cn from 'classnames'

import {SquareCalendar} from "widgets/square-calendar";
import {getSideBarState} from "widgets/side-bar/model";

import '../style/index.scss'
import {CategoriesData, CommentType} from "../model/data";
import MainDescription from "./main-description";
import Block from "../../../entities/block";
import SimilarCategory from "./similar-category";
import SimilarEvents from "./similar-events";
import Gallery from "./gallery";
import Notify from "./notify";
import EventNavigation from "./event-navigation";
import Organizers from "./organizers";
import EventComments from "./event-comments";

import {stateEvent} from "../model/state";

export type EventData = {
    date: Date,
    title: string,
    img: string
    description: string,
    comments: CommentType[],
    similarEvents: Event[],
    similarCategory: CategoriesData[]
}

const Event = () => {
    const sideBarState = useSelector(getSideBarState)
    const [event, setEvent] = useState<EventData>(stateEvent)

    return (
        <div className={cn(
            'event',
            {
                'event_narrow': sideBarState
            }
        )}>
            <div className={'event__description'}>
                <div className={'event__main-info'}>
                    <MainDescription
                        title={event.title}
                        img={event.img}
                        description={event.description}
                    />
                    <EventComments />
                </div>
                <Block
                    title={'Похожие категории'}
                    block={<SimilarCategory/>}
                />
                <Block
                    title={'Похожие события'}
                    block={<SimilarEvents/>}
                />
            </div>
            <div className={'event__info'}>
                <div className={'event__notify-n-gallery'}>
                    <Gallery/>
                    <Notify/>
                </div>
                <EventNavigation/>
                <div className={'event__date'}>
                    <SquareCalendar
                        initDate={event.date}
                        chosenDate={event.date}
                    />
                </div>
                <Organizers/>
            </div>
        </div>
    );
};

export default Event;