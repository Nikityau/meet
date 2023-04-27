import React from 'react';
import cn from 'classnames'

type SubtitleProps = {
    subtitle: string,
    classNames?: string[]
}

const Subtitle: React.FC<SubtitleProps> = ({subtitle, classNames}) => {
    return (
        <div className={cn('create-post__subtitle', classNames)}>
            <span>{subtitle}</span>
        </div>
    );
};

export default Subtitle;