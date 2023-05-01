import React, {useEffect, useState} from 'react';
import cn from 'classnames'

import Subtitle from "./subtitle";

import {useCreateEvent} from "../helpers/hooks/useCreateEvent";

const CreatePostTitle = () => {

    const {status, dispatch} = useCreateEvent('title')

    const [state, setState] = useState<string>("")

    useEffect(() => {
        console.log('CREATETITLE', status)
    }, [status])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setState(value)
        dispatch(value)
    }

    return (
        <div className={cn(
            'create-post-title',
            {
                'create-post-title_error': status.error,
                'create-post-title_past': status.status == 'done'
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

export default CreatePostTitle;