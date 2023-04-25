import React from 'react';
import {Link, useLocation} from "react-router-dom";
import cn from 'classnames'

import {AppRoutes} from "shared/routes/routes";

import './style/index.scss'

interface ICreatePostTabLink {
    title: string,
    icon: string,
    link: AppRoutes
}

const CreatePostTabLink: React.FC<ICreatePostTabLink> = ({link, icon,title}) => {

    const location = useLocation()

    return (
        <Link to={link}>
            <div className={cn(
                'create-post-tab-link',
                {
                    'create-post-tab-link_current': location.pathname == link
                }
            )}>
                <div className={'create-post-tab-link__icon'}>
                    <img src={icon} alt={'icon'}/>
                </div>
                <div className={'create-post-tab-link__title'}>
                    <span>{title}</span>
                </div>
            </div>
        </Link>
    );
};

export default CreatePostTabLink;