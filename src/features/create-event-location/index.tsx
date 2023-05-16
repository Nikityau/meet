import React, {useState} from 'react';
import cn from 'classnames'

import {useCreateEvent} from "../../pages/create-post/helpers/hooks/useCreateEvent";
import {EventObject} from "../../pages/create-post/controller/type/type";
import {CreateLocationService} from "../../pages/create-post/service/create-location.service";

import location_img from './assets/location.png'

import './style/index.scss'
import {CreateEventController} from "../../pages/create-post/controller/create-event.controller";

const CreateEventLocation = () => {

    const {status, dispatch} = useCreateEvent<EventObject>('location', new CreateLocationService())
    const [location, setLocation] = useState<string>(() => {
        const value = CreateEventController.GET().getStateByKey('location')

        return !value ? "" : value
    })

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value)
        dispatch(e.target.value)
    }

    return (
        <div className={cn(
            'create-event-location',
            {
                'create-event-location_error': status.error
            }
        )}>
            <input
                value={location}
                type={'text'}
                onChange={onTextChange}
                placeholder={'Напишите место прохождения мероприятия'}
            />
            <img src={location_img} alt={'location'}/>
        </div>
    );
};

export default CreateEventLocation;