import React from 'react';

import border_img from '../assets/border.png'
import upload_img from '../assets/upload.png'

const BeforeUpload = () => {
    return (
        <div className={'before-upload'}>
            <div className={'before-upload__border'}>
                <img src={border_img} alt={'border-image'}/>
            </div>
            <div className={'before-upload__upload-img'}>
                <img src={upload_img} alt={'upload-img'}/>
            </div>
        </div>
    );
};

export default BeforeUpload;