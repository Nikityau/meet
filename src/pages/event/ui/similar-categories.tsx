import React from 'react';
import {CategoriesData} from "../model/data";

import Category from "features/category";

type SimilarCategoriesProps = {
    categories: CategoriesData[]
}

const SimilarCategories:React.FC<SimilarCategoriesProps> = ({categories}) => {
    return (
        <div className={'event__similar-categories'}>
            {
                categories.map(c => (
                    <Category
                        key={c.id}
                        title={c.title}
                    />
                ))
            }
        </div>
    );
};

export default SimilarCategories;