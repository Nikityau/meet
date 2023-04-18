import React from 'react';
import cn from 'classnames'

import './style/index.scss'

type BlockProps = {
    title: string
    classNames?: string[],
    gap?: number
    block: React.ReactNode
}

const Block: React.FC<BlockProps> = (
    {
        block,
        title,
        classNames,
        gap = 20
    }
) => {
    return (
        <div className={cn('block', cn(classNames))}
            style={{
                gap: `${gap}px`
            }}
        >
            <div className={'block__title'}>
                <span>{title}</span>
            </div>
            {block}
        </div>
    );
};

export default Block;