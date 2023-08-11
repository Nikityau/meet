import React from 'react';

import TagsList from "./tags-list";

const Tags = () => {
    return (
        <div className={'filter-bar__tags'}>
            <div className={'filter-bar__tags-title'}>
                <span>Теги</span>
            </div>
            <TagsList/>
        </div>
    );
};

export default Tags;