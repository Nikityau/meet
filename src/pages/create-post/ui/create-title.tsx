import React, {useContext, useEffect, useState} from 'react';
import cn from 'classnames'

import {CreatePostContext} from "../provider/wrapper";

import Subtitle from "./subtitle";

import {useCreateError} from "../helpers/hooks/useCreateError";
import {useIsPastStage} from "../helpers/hooks/useIsPastStage";
import {useCreatePost} from "../zustand";

const CreateTitle = () => {
    const context = useContext(CreatePostContext)

    const {post} = useCreatePost()

    const [title, setTitle] = useState<string>(post?.title || "")
    const isError = useCreateError('title')
    const isPast = useIsPastStage(1)

    useEffect(() => {
        console.log(post)
        setTitle(post?.title || "")
    }, [post])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        context.change('title', e.target.value)
    }

    useEffect(() => {
        console.log(isError)
    }, [isError])

    return (
        <div className={cn(
            'create-title',
            {
                'create-title_error': isError,
                'create-title_past': isPast
            }
        )}>
            <div className={'create-title__input'}>
                <input
                    type={'text'}
                    value={title}
                    placeholder={'Заголовок'}
                    onChange={onChange}

                />
            </div>
            <Subtitle subtitle={'Напишите заголовок мероприятия'}/>
        </div>
    );
};

export default CreateTitle;