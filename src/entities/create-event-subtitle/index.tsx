import React from 'react';
import cn from "classnames";

import {useCreateEventStatus} from "../../pages/create-post/helpers/hooks/useCreateEventStatus";
import {EventObject} from "../../pages/create-post/controller/type/type";

import './style/index.scss'

type CreatePostSubtitleProps<T> = {
    uniqueName: keyof T,
    title: string,
    isTitle: boolean
}

const CreatePostSubtitle: React.FC<CreatePostSubtitleProps<EventObject>> = ({uniqueName, title, isTitle}) => {
    const {status} = useCreateEventStatus(uniqueName)

    return (
        <div className={cn(
            'create-post-subtitle',
            {
                'crate-post-subtitle_title': isTitle,
                'create-post-subtitle_past': status.status == 'done'
            }
        )}>
            <span>{title.toString()}</span>
        </div>
    );
};

export default CreatePostSubtitle;