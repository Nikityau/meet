import React from 'react';

type AfterUploadProps = {
    img: string
}

const AfterUpload: React.FC<AfterUploadProps> = ({img}) => {
    return (
        <div className={'after-upload'}>
            <img src={img} alt={'image'}/>
        </div>
    );
};

export default AfterUpload;