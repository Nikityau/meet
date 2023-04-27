import React, {useEffect, useState} from 'react';
import cn from 'classnames'
import ReactQuill from 'react-quill'

import Subtitle from "./subtitle";

import {WhiteBack} from "entities/white-back";
import {useIsPastStage} from "../helpers/hooks/useIsPastStage";
import {useCreateError} from "../helpers/hooks/useCreateError";

const CreateDescription = () => {

    const isPast = useIsPastStage(3)
    const isError = useCreateError('description')

    const [text, setText] = useState()

    const onChangeDescription = (e) => {
        console.log(e)
        //setText(e)
    }

    return (
        <div className={cn(
            'create-description',
            {
                'create-description_past': isPast,
                'create-description_error': isError
            }
        )}>
            <div className={'create-description__up'}>
                <Subtitle classNames={['create-description__title']} subtitle={'Описание'}/>
                <Subtitle subtitle={'Напишите краткое содержание мероприятия'}/>
            </div>
            <WhiteBack>
                <div className={'create-description__description'}>
                    <ReactQuill
                        value={text}
                        onChange={onChangeDescription}
                    />
                </div>
            </WhiteBack>
        </div>
    );
};

export default CreateDescription;