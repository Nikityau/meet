import React, {useDeferredValue, useEffect, useState} from 'react';
import cn from "classnames";

import {useCreateEvent} from "../../pages/create-post/helpers/hooks/useCreateEvent";
import {CreateTextService} from "../../pages/create-post/service/create-text.service";
import {EventObject} from "../../pages/create-post/controller/type/type";
import {CreateEventController} from "../../pages/create-post/controller/create-event.controller";

import './style/create-title.scss'


const CreateEventTitle = () => {
    const {status, dispatch} = useCreateEvent<EventObject>("title", new CreateTextService())

    const [state, setState] = useState<string>(() => {
        const inst = CreateEventController.GET().getStateByKey('title')
        return inst ? inst : ""
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setState(value)
        dispatch(value)
    }


    return (
        <div className={cn(
            'create-event-title',
            {
                'create-event-title_error': status.error,
                'create-event-title_past': status.status == 'done'
            }
        )}>
            <input
                type={'text'}
                value={state}
                placeholder={'Заголовок'}
                onChange={onChange}
            />
        </div>
    );
};

export default CreateEventTitle;