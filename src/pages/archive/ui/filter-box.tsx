import React from 'react';

type FilterBoxProps = {
    text: string
}

const FilterBox = ({text}:FilterBoxProps) => {
    return (
        <div className={'filter-box'}>
            <div className={'filter-box__checkbox'}>
            </div>
            <div className={'filter-box__text'}>
                <span>{text}</span>
                <div className={'filter-box__underline'}>
                </div>
            </div>
        </div>
    );
};

export default FilterBox;