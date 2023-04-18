import React from 'react';

type ImageProps = {
    img: string
}

const Image: React.FC<ImageProps> = ({img}) => {
    return (
        <div className={'comment__image'}
            style={{
                backgroundImage: `url(${img})`
            }}
        >
        </div>
    );
};

export default Image;