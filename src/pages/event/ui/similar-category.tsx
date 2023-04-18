import React from 'react';

import {dataCategories} from "../model/data";
import Category from "../../../features/category";

const SimilarCategory = React.memo(() => {
    return (
        <div className={'event__similar-category'}>
            {
                dataCategories.map(c => (
                    <Category
                        key={c.id}
                        title={c.title}
                    />
                ))
            }
        </div>
    );
})

export default SimilarCategory;