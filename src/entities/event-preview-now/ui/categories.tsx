import React from 'react';

type CategoriesProps = {
    categories: string[]
}

const Categories = ({categories}:CategoriesProps) => {

    const getC = (c: string[]): string => {
        if(c.length == 0) return null

        return categories.reduce((p, c) => {
            return p + ' · ' + c
        })
    }

    return (
        <div className={'event-preview-now__categories'}>
            <span>
                {
                    getC(categories)
                }
            </span>
        </div>
    );
};

export default Categories;