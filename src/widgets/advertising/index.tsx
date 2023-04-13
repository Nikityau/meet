import React from 'react';

import './style/index.scss'

type AdvertisingProps = {
    url: string,
    img: string
}

const Advertising = ({img, url}: AdvertisingProps) => {
    return (
        <a
            href={url}
            target={'_blank'}
        >
            <div className={'advertising'}
                style={{
                    backgroundImage: `url(${img})`
                }}
            >
            </div>
        </a>
    );
};

export default Advertising;