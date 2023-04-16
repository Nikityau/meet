import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import cn from 'classnames'

import Block from "../events/ui/block";

import MainDescription from "./ui/main-description";
import Comments from "./ui/comments";
import SimilarCategory from "./ui/similar-category";
import SimilarEvents from "./ui/similar-events";
import Gallery from "./ui/gallery";
import Notify from "./ui/notify";
import EventNavigation from "./ui/event-navigation";
import EventDate from "./ui/event-date";
import Organizers from "./ui/organizers";

import './style/index.scss'

const Event = () => {
    const p = useLocation()

    return (
        <div className={'event'}>
            <div className={'event__description'}>
                <div className={'event__main-info'}>
                    <MainDescription/>
                    <Comments/>
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
                <EventDate/>
                <Organizers/>
            </div>
        </div>
    );
};

export default Event;