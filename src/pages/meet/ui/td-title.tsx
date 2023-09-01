import React from 'react';
import {useFilterMeet} from "../../../local-states/filter-meet";

const TdTitle = () => {
    const {filters} = useFilterMeet()

    return (
        <div className={'today-event__title'}>
            <span>
                {
                    filters
                        ? 'События'
                        : 'Сегодня'
                }
            </span>
        </div>
    );
};

export default TdTitle;