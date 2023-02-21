import React from 'react';

import './style/withGreyBg.scss'

const WithGreyBg = ({children}:React.PropsWithChildren) => {
    return (
        <div className={'ui_grey_bg'}>
            { children }
        </div>
    );
};

export default WithGreyBg;