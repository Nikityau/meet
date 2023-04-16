import React from 'react';

import gallery_img from '../assets/gallery.png'

const Gallery = () => {
    return (
        <div className={'event__gallery'}>
            <img src={gallery_img} alt={'img'}/>
            <span>Галерея</span>
        </div>
    );
};

export default Gallery;