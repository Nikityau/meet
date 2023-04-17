import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import cn from 'classnames'

import {SquareCalendar} from "widgets/square-calendar";
import {getSideBarState} from "widgets/side-bar/model";

import Block from "../events/ui/block";

import {CategoriesData, CommentType} from "./model/data";

import MainDescription from "./ui/main-description";
import Comments from "./ui/comments";
import SimilarCategory from "./ui/similar-category";
import SimilarEvents from "./ui/similar-events";
import Gallery from "./ui/gallery";
import Notify from "./ui/notify";
import EventNavigation from "./ui/event-navigation";
import Organizers from "./ui/organizers";

import './style/index.scss'


type EventData = {
    date: Date,
    title: string,
    description: string,
    comments: CommentType[],
    similarEvents: Event[],
    similarCategory: CategoriesData[]
}

const Event = () => {
    const p = useLocation()

    const sideBarState = useSelector(getSideBarState)
    const [event, setEvent] = useState<EventData>({
        title: 'Современная архитектура веб приложений',
        description: 'В Центре IT-Притяжения РГУПС пройдет научно-популярная лекция для всех желающих студентов, на тему «Современная архитектура веб приложений»\n' +
            '\n' +
            'Лекцию читает к.т.н. доцент кафедры «Вычислительная техника и автоматизированные системы управления» Капкаев Андрей Андреевич.\n' +
            '\n' +
            'Лекция будет проходить в режиме диалога, когда каждый может задать любой вопрос, ответ на который формирует совместно ребята и педагог.\n' +
            '\n' +
            'Студенты ознакомиться с элементами, системами, используемыми при построении современных веб приложений, популярными и наиболее востребованными в информационных компаниях технологиями веба.\n' +
            '\n',
        date: new Date(),
        comments: [],
        similarEvents: [],
        similarCategory: []
    })

    return (
        <div className={cn(
            'event',
            {
                'event_narrow': sideBarState
            }
            )}>
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