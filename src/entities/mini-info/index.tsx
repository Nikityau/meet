import React, {PropsWithChildren} from 'react';

import './style/index.scss'

const MiniInfo = ({children}:PropsWithChildren) => {
    return (
        <div className={'mini-info'}>
            {children}
        </div>
    );
};

export default MiniInfo;