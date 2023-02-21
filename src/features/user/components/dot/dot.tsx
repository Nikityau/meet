import React from 'react';
import cn from 'classnames'

import './style/dot.scss'

type DotProps = {
    status: 'online' | 'offline' | 'away'
}

const Dot = ({status}: DotProps) => {
    return (
        <div className={cn(
            'dot',
            {
                'dot_online': status == 'online',
                'dot_offline': status == 'offline',
                'dot_away': status == 'away'
            }
        )}>
            <div className={'dot__inner'}>

            </div>
        </div>
    );
};

export default Dot;