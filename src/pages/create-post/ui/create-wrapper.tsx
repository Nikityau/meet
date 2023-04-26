import React from 'react';

import Subtitle from "./subtitle";

const CreateWrapper = () => {
    return (
        <div className={'create-wrapper'}>
            <div className={'create-wrapper__up'}>
                <Subtitle subtitle={'Обложка'}/>
                <Subtitle subtitle={'Выберите фото или видео для обложки мероприятия'}/>
            </div>
        </div>
    );
};

export default CreateWrapper;