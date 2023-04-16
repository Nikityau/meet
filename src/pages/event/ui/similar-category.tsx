import React from 'react';

import Compilation from "../../events/ui/compilation";

import {dataCategories} from "../model/data";

const SimilarCategory = () => {
    return (
        <div className={'event__similar-category'}>
            {
                dataCategories.map(c => (
                    <Compilation
                        key={c.id}
                        title={c.title}
                    />
                ))
            }
        </div>
    );
};

export default SimilarCategory;