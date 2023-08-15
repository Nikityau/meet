import React from 'react';
import {useToggle} from "../../../shared/helpers/hooks/useToggle";

type DescriptionProps = {
    description: string
}

const Description = ({description}: DescriptionProps) => {

    const {is, f} = useToggle()

    return (
        <div className={'archive-event-descr'}>
            <span>
                {
                    is
                        ? description + ' '
                        : description.substring(0, 150) + ' ... '
                }
            </span>
            <span className={'archive-event-descr__btn'}
                onClick={f.swtch}
            >
                {
                    is
                        ? 'Скрыть'
                        : 'Показать больше'
                }
            </span>
        </div>
    );
};

export default Description;