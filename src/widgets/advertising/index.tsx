import React from 'react';
import cn from 'classnames'

import './style/index.scss'

type AdvertisingProps = {
    url: string,
    img: string,
    classNames?: string[]
}

const Advertising = ({img, url, classNames}: AdvertisingProps) => {
    return (
        <a
            href={url}
            target={'_blank'}
        >
            <div className={cn('advertising', classNames)}
                style={{
                    backgroundImage: `url(${img})`
                }}
            >
            </div>
        </a>
    );
};

export default Advertising;