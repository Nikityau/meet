import React, {useContext} from 'react';
import cn from 'classnames'

import {useCreatePost} from "../zustand";
import {CreatePostContext} from "../provider/wrapper";
const CreatePostBtn = () => {

    const context = useContext(CreatePostContext)

    const {currentStage, maxStage,error} = useCreatePost()

    const onNext = () => {
        if(currentStage == maxStage) {
            context.change('finish', null)
        } else {
            context.change('next', null)
        }
    }

    return (
        <div className={cn(
            'create-post-btn',
            {
                'create-post-btn_error': error?.length > 0
            }
        )} onClick={onNext}>
            <span>
                {
                    currentStage == maxStage
                        ? 'Завершить создание'
                        : 'Следующий шаг'
                }
            </span>
        </div>
    );
};

export default CreatePostBtn;