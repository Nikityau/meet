import React from 'react';

import CreatePostTabLink from "features/create-post-tab-link";

import {AppRoutes} from "shared/routes/routes";

import plus_img from '../assets/plus.png'
import eye_img from '../assets/eye.png'

const Tabs = () => {
    return (
        <div className={'create-post__tabs'}>
            <CreatePostTabLink
                title={'Создание'}
                icon={plus_img}
                link={AppRoutes.CREATE_POST_CREATING}
            />
            <CreatePostTabLink
                title={'Просмотр'}
                icon={eye_img}
                link={AppRoutes.CREATE_POST_PREVIEW}
            />
        </div>
    );
};

export default Tabs;