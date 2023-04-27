import React, {useContext, useEffect, useRef, useState} from 'react';
import cn from 'classnames'

import {WhiteBack} from "entities/white-back";

import Subtitle from "./subtitle";

import {useCreateError} from "../helpers/hooks/useCreateError";
import {useIsPastStage} from "../helpers/hooks/useIsPastStage";
import {CreatePostContext} from "../provider/wrapper";
import {useCreatePost} from "../zustand";

import outline_img from '../assets/outline.png'
import upload_img from '../assets/upload.png'

const CreateWrapper = () => {

    const context = useContext(CreatePostContext)
    const {post} = useCreatePost()

    const fileInput = useRef<HTMLInputElement>()

    const isError = useCreateError('wrapper')
    const isPast = useIsPastStage(2)

    const [image, setImage] = useState<File>(null)

    useEffect(() => {
        if(!post.image) {
            return
        }

    }, [post.image])

    const onSetImage = () => {
        context.change('wrapper', 'image')
    }
    const onChooseImage = () => {
        fileInput.current.click()
    }

    const onChangeImage = () => {
        console.log('change')
        const value = fileInput.current.files

        context.change('wrapper', value[0])

        setImage(value[0])
    }

    const imagePlug = (
        <div className={'create-wrapper__image-plug'}>
            <div className={'create-wrapper__image-plug-wrapper'}>
                <img src={outline_img} alt={'outline'}/>
                <img data-name={'upload'} src={upload_img} alt={'upload'}/>
            </div>
        </div>
    )

    return (
        <div className={cn(
            'create-wrapper',
            {
                'create-wrapper_error': isError,
                'create-wrapper_past': isPast,
            }
        )}>
            <div className={'create-wrapper__up'}>
                <Subtitle classNames={['create-wrapper__title']} subtitle={'Обложка'}/>
                <Subtitle subtitle={'Выберите фото или видео для обложки мероприятия'}/>
            </div>
            <WhiteBack>
                <div className={'create-wrapper__image-choser'} onClick={onChooseImage}>
                    {
                        image
                            ? <img src={URL.createObjectURL(image)} alt={'image'}/>
                            : imagePlug
                    }
                </div>
                <input
                    className={'create-wrapper__file-input'}
                    type={'file'}
                    ref={fileInput}
                    accept={'image/jpeg, image/jpg, image/png'}
                    onChange={onChangeImage}
                />
            </WhiteBack>
        </div>
    );
};

export default CreateWrapper;