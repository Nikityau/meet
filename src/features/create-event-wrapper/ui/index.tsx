import React, {useRef, useState} from 'react';
import cn from 'classnames'

import BeforeUpload from "./before-upload";
import AfterUpload from "./after-upload";

import {useCreateEvent} from "../../../pages/create-post/helpers/hooks/useCreateEvent";
import {EventObject} from "../../../pages/create-post/controller/type/type";
import {CreateWrapperService} from "../../../pages/create-post/service/create-wrapper.service";

import '../style/index.scss'

const CreateEventWrapper = () => {

    const {status, dispatch} = useCreateEvent<EventObject>('wrapper', new CreateWrapperService())

    const inputRef = useRef<HTMLInputElement>()
    const [img, setImage] = useState<any>(null)

    const onClickInput = () => {
        console.log('click')
        inputRef.current.click()
    }

    const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(!files) return

        dispatch(files[0])
        setImage(URL.createObjectURL(files[0]))
    }

    return (
        <div className={'create-event-wrapper'} onClick={onClickInput}>
            {
                img
                    ? <AfterUpload img={img}/>
                    : <BeforeUpload/>
            }

            <input
                type={'file'}
                accept={'image/*'}
                ref={inputRef}
                onChange={onUpload}
            />
        </div>
    );
};

export default CreateEventWrapper;