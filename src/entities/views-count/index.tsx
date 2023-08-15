import React from 'react';
import {toShortNum} from "../../shared/helpers/to-short-num";

import './style/index.scss'

type ViewsCountProps = {
    id: string,
    count: number
}

const ViewsCount = ({count, id}: ViewsCountProps) => {
    return (
        <div className={'views-count'}>
            <div className={'views-count__img'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path
                        d="M2.03556 12.8224C1.96648 12.6151 1.96642 12.3907 2.03538 12.1834C3.42374 8.00972 7.3608 5 12.0008 5C16.6387 5 20.5742 8.00692 21.9643 12.1776C22.0334 12.3849 22.0335 12.6093 21.9645 12.8166C20.5762 16.9903 16.6391 20 11.9991 20C7.36121 20 3.42565 16.9931 2.03556 12.8224Z"
                        stroke="#292929"/>
                    <path
                        d="M15 12.5C15 14.1569 13.6569 15.5 12 15.5C10.3432 15.5 9.00001 14.1569 9.00001 12.5C9.00001 10.8431 10.3432 9.5 12 9.5C13.6569 9.5 15 10.8431 15 12.5Z"
                        stroke="#292929"/>
                </svg>
            </div>
            <div className={'views-count__count'}>
                <span>{toShortNum(count)}</span>
            </div>
        </div>
    );
};

export default ViewsCount;