import React, {useEffect} from 'react';

import {useNavSlide} from "./helpers/useNavSlide";

import './style/nav-slider.scss'

const NavSlider = () => {

    const top = useNavSlide()

    return (
        <div className={'nav-slider'}
            style={{
                transform: `translate(0, ${top}px)`
            }}
        >
        </div>
    );
};

export default NavSlider;