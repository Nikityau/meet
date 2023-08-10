import React from 'react';
import {selectionsData} from "../data/selections";
import Selection from "../../../entities/selection";

const Selections = () => {
    return (
        <div className={'selections'}>
            <div className={'selections__title'}>
                <span>Подборки</span>
            </div>
            <div className={'selections__list'}>
                {
                    selectionsData.map(data => (
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