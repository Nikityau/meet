import React from 'react';

import './style/title.scss'

type TitleProps = {
    title: string
}

const Title = ({title}:TitleProps) => {
    return (
        <div className={'title'}>
            <span>{ title }</span>
        </div>
    );
};

export default Title;