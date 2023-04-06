import React, {useRef} from 'react';

import './style/index.scss'

import glass_img from './assets/glass.png'

const Ui = () => {

    const input = useRef<HTMLInputElement>()

    const onGlassClick = () => {
        input.current.select()
    }

    return (
        <div className={'search-field'}>
            <input ref={input} type={'text'} placeholder={'Поиск'}/>
            <div className={'search-field__glass'} onClick={onGlassClick}>
                <img src={glass_img} alt={'glass'}/>
            </div>
        </div>
    );
};

export default Ui;