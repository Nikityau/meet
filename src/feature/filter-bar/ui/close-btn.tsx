import React from 'react';

type CloseBtnProps = {
    onClick: () => void
}

const CloseBtn = ({onClick}:CloseBtnProps) => {
    return (
        <div className={'filter-bar__close'} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 1L1 13M1 1L13 13" stroke="black"/>
            </svg>
        </div>
    );
};

export default CloseBtn;