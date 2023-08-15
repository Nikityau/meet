import React from 'react';
import Selection from "../../../entities/selection";
import {tags} from "../../../shared/data/tags";

const Selections = () => {
    return (
        <div className={'selections'}>
            <div className={'selections__title'}>
                <span>Подборки</span>
            </div>
            <div className={'selections__list'}>
                {
                    tags.map(data => (
                        <Selection
                            id={data.id}
                            text={data.selection}
                            key={data.id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Selections;