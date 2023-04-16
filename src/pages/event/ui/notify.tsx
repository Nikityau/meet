import React from 'react';

import ring_img from '../assets/ring2.png'

const Notify = () => {
    return (
        <div className={'event__notify'}>
            <img src={ring_img} alt={'ring'}/>
            <span>Поставить уведомление</span>
        </div>
    );
};

export default Notify;