import React, {useEffect, useReducer} from 'react';
import cn from 'classnames'

import {SquareCalendar} from "../../square-calendar";

import {useCreateEvent} from "pages/create-post/helpers/hooks/useCreateEvent";
import {EventObject} from "pages/create-post/controller/type/type";
import {CreateDateService} from "pages/create-post/service/create-date.service";
import {CreateEventController} from "pages/create-post/controller/create-event.controller";

import {isDatesCompare} from "shared/helpers/is-date-compare";

import {dateState, dateReducer, addChosenDate, removeChosenDate, setTime} from "../reducer";

import {SquareClock} from "../../square-clock";
import {WhiteBack} from "../../../entities/white-back";

import '../style/index.scss'

const CreateEventDateTime = () => {

    const {status, dispatch} = useCreateEvent<EventObject>('date', new CreateDateService())
    const [dateObj, dispatchDate] = useReducer(dateReducer, dateState, () => {

        const date = CreateEventController.GET().getStateByKey('date')

        if (!date) {
            return {
                time: "11:00",
                currentDate: new Date(Date.now()),
                chosenDates: [],
            }
        }

        const savedDates = date.dates.map(d => new Date(d))

        console.log(savedDates)

        return {
            time: date.time,
            currentDate: savedDates[0],
            chosenDates: savedDates,
        }
    })

    const isDatesContainDate = (date: Date): boolean => {
        const dates = dateObj.chosenDates

        for (let di in dates) {
            if (isDatesCompare(dates[di], date)) {
                return true
            }
        }

        return false
    }

    const onDateClick = (date: Date) => {
        if (isDatesContainDate(date)) {
            dispatchDate(removeChosenDate(date, dispatch))
            return
        }

        dispatchDate(addChosenDate(date, dispatch))
    }

    const onTimeClick = (time: string) => {
        dispatchDate(setTime(time, dispatch))
    }

    return (
        <div className={cn(
            'create-event-date-time',
            {
                'create-event-date-time_error': status.error
            }
        )}>
            <WhiteBack>
                <SquareCalendar
                    initDate={dateObj.currentDate}
                    chosenDates={dateObj.chosenDates}
                    canChangeMonth={true}
                    onDateClick={onDateClick}
                />
            </WhiteBack>
            <WhiteBack>
                <SquareClock
                    time={dateObj.time}
                    onTimeClick={onTimeClick}
                />
            </WhiteBack>
        </div>
    );
};

export default CreateEventDateTime;