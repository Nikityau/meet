import React from 'react';

type TitleWrapperProps = {
    title: string
} & React.PropsWithChildren

const TitleWrapper = ({title, children}: TitleWrapperProps) => {
    return (
        <div className={'title-wrapper'}>
            <div className={'title-wrapper__title'}>
                <span>{title}</span>
            </div>
            {
                children
            }
        </div>
    );
};

export default TitleWrapper;