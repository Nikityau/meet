import React from 'react';

import Circle from "./circle";

import '../style/index.scss'

interface ICreateEventStage {
    number: number,
    Component: React.ReactNode
}

const CreateEventStage:React.FC<ICreateEventStage> = ({Component, number}) => {
    return (
        <div className={'create-event-stage'}>
            <Circle number={number}/>
            {
                Component
            }
        </div>
    );
};

export default CreateEventStage;