import React from 'react';

import './style/index.scss'

const WhiteBack = ({children}:React.PropsWithChildren) => {
    return (
        <div className={'ui-white-back'}>
            {children}
        </div>
    );
};

export default WhiteBack;