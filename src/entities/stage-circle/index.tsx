import React from 'react';

import './style/index.scss'

type StageCircleProps = {
    number: number
}

const StageCircle: React.FC<StageCircleProps> = ({number}) => {
    return (
        <div className={'stage-circle'}>
            <span>{number}</span>
        </div>
    );
};

export default StageCircle;