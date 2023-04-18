import React, {useState} from 'react';
import {useSelector} from "react-redux";
import cn from 'classnames'

import {SquareCalendar} from "widgets/square-calendar";
import {getSideBarState} from "widgets/side-bar/model";


import img from '../assets/event.png'

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


type EventData = {
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
        similarCategory: [],
        img
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