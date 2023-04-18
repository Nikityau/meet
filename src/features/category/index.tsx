import React from 'react';

import {WhiteBack} from "entities/white-back";

import './style/index.scss'

type CategoryProps = {
    title: string,
    onClick?: () => void
}
const Category = ({title, onClick}:CategoryProps) => {

    const onCategoryClick = () => {
        if(!onClick) return
    }

    return (
        <WhiteBack>
            <div className={'category'} onClick={onCategoryClick}>
                <span>{title}</span>
            </div>
        </WhiteBack>
    );
};

export default Category;