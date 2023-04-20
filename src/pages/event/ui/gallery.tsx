import React from 'react';

import {WhiteBack} from "entities/white-back";

import gallery_img from '../assets/gallery.png'

const Gallery = () => {
    return (
        <WhiteBack>
            <div className={'event__gallery'}>
                <img src={gallery_img} alt={'img'}/>
                <span>Галерея</span>
            </div>
        </WhiteBack>
    );
};

export default Gallery;