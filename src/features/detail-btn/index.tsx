import React from 'react';

import './style/index.scss'

type DetailBtnProps = {
    id: string
}

const DetailBtn: React.FC<DetailBtnProps> = ({id}) => {
    return (
        <div className={'detail-btn'}>
            <span>Подробнее</span>
        </div>
    );
};

export default DetailBtn;