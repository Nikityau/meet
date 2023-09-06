import React from 'react';

import './style/index.scss'

type AdBannerProps = {
    ad: React.ReactNode,
}

const AdBanner = ({ad}:AdBannerProps) => {
    return (
        <div className={'ad-banner'}>
            {
                ad
            }
            <div className={'ad-banner__notify'}>
                <span>реклама</span>
            </div>
        </div>
    );
};

export default AdBanner;