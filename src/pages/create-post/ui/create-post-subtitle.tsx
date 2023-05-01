import React from 'react';
import cn from 'classnames'

import {useCreateEventStatus} from "../helpers/hooks/useCreateEventStatus";

type CreatePostSubtitleProps = {
    uniqueName: string
    title: string
}

const CreatePostSubtitle: React.FC<CreatePostSubtitleProps> = ({title, uniqueName}) => {

    const {status} = useCreateEventStatus(uniqueName)

    return (
        <div className={cn(
            'create-post-subtitle',
            {
                'create-post-subtitle_past': status.status == 'done'
            }
        )}>
            <span>{title}</span>
        </div>
    );
};

export default CreatePostSubtitle;