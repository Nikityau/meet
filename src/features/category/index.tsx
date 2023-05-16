import React from 'react';
import cn from 'classnames'

import {WhiteBack} from "entities/white-back";

import './style/index.scss'

type CategoryProps = {
    isCurrent: boolean
    title: string,
    onClick?: (title: string) => void
}
const Category = ({title, onClick, isCurrent = false}:CategoryProps) => {

    const onCategoryClick = () => {
        if(!onClick) return

        onClick(title)
    }

    return (
        <div className={cn(
            'category__wrapper',
            {
                'category_current': isCurrent
            }
        )}>
            <WhiteBack>
                <div className={'category'} onClick={onCategoryClick}>
                    <span>{title}</span>
                </div>
            </WhiteBack>
        </div>
    );
};

export default Category;