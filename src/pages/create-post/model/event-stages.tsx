import React from "react";
import {v4} from "uuid";

import {EventObject, EventStage} from "../controller/type/type";

import CreationStage from "entities/creation-stage";
import CreatePostSubtitle from "entities/create-event-subtitle";
import StageCircle from "entities/stage-circle";

import CreateEventTitle from "features/create-title";
import {CreateEventWrapper} from "../../../features/create-event-wrapper";

export const eventStages: EventStage<EventObject>[] = [
    {
        id: v4(),
        number: 1,
        uniqueName: 'title',
        renderNode:
            <CreationStage
                Numbering={
                    <StageCircle
                        number={1}
                    />
                }
                Title={
                    <>
                        <CreateEventTitle/>
                        <CreatePostSubtitle
                            isTitle={false}
                            title={'Напишите заголовок мероприятия'}
                            uniqueName={'title'}
                        />
                    </>
                }
                CreateZone={null}
            />
    },
    {
        id: v4(),
        number: 2,
        uniqueName: 'wrapper',
        renderNode:
            <CreationStage
                Numbering={
                    <StageCircle
                        number={2}
                    />
                }
                Title={
                    <>
                        <CreatePostSubtitle
                            isTitle={true}
                            title={'Обложка'}
                            uniqueName={'wrapper'}
                        />
                        <CreatePostSubtitle
                            isTitle={false}
                            title={'Выберите фото или видео для обложки мероприятия'}
                            uniqueName={'wrapper'}
                        />
                    </>

                }
                CreateZone={
                    <CreateEventWrapper/>
                }
            />
    },
    {
        id: v4(),
        number: 3,
        uniqueName: 'description',
        renderNode:
            <CreationStage
                Numbering={
                    <StageCircle
                        number={3}
                    />
                }
                Title={
                    <>
                        <CreatePostSubtitle
                            isTitle={true}
                            title={'Описание'}
                            uniqueName={'description'}
                        />
                        <CreatePostSubtitle
                            isTitle={false}
                            title={'Напишите краткое содержание мероприятия'}
                            uniqueName={'description'}
                        />
                    </>
                }
                CreateZone={null}
            />
    },
    {
        id: v4(),
        number: 4,
        uniqueName: 'date',
        renderNode:
            <CreationStage
                Numbering={
                    <StageCircle
                        number={4}
                    />
                }
                Title={
                    <>
                        <CreatePostSubtitle
                            isTitle={true}
                            title={'Дата и время проведения мероприятия'}
                            uniqueName={'date'}
                        />
                        <CreatePostSubtitle
                            isTitle={false}
                            title={'Выберите дату(ы) когда будет проходить мероприятие а так же время проведения мероприятия'}
                            uniqueName={'date'}
                        />
                    </>
                }
                CreateZone={null}
            />
    },
    {
        id: v4(),
        number: 5,
        uniqueName: 'location',
        renderNode:
            <CreationStage
                Numbering={
                    <StageCircle
                        number={5}
                    />
                }
                Title={
                    <>
                        <CreatePostSubtitle
                            isTitle={true}
                            title={'Место проведения мероприятия'}
                            uniqueName={'location'}
                        />
                        <CreatePostSubtitle
                            isTitle={false}
                            title={'Укажите место проведения мероприятия'}
                            uniqueName={'location'}
                        />
                    </>
                }
                CreateZone={null}
            />
    },
    {
        id: v4(),
        number: 6,
        uniqueName: 'category',
        renderNode:
            <CreationStage
                Numbering={
                    <StageCircle
                        number={6}
                    />
                }
                Title={
                    <>
                        <CreatePostSubtitle
                            isTitle={true}
                            title={'Категория мероприятия'}
                            uniqueName={'category'}
                        />
                        <CreatePostSubtitle
                            isTitle={false}
                            title={'Выберите категории к которым относится ваше мероприятие'}
                            uniqueName={'category'}
                        />
                    </>
                }
                CreateZone={null}
            />
    },
    {
        id: v4(),
        number: 7,
        uniqueName: 'feedback',
        renderNode:
            <CreationStage
                Numbering={
                    <StageCircle
                        number={6}
                    />
                }
                Title={
                    <>
                        <CreatePostSubtitle
                            isTitle={true}
                            title={'Обратная связь'}
                            uniqueName={'feedback'}
                        />
                        <CreatePostSubtitle
                            isTitle={false}
                            title={'Выберите людей которые будут находится на мероприятие или с которыми можно будет связаться они будут располагаться в разделе организаторы'}
                            uniqueName={'feedback'}
                        />
                    </>
                }
                CreateZone={null}
            />
    }
]