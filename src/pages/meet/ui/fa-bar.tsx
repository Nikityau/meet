import React from 'react';

type FaBarProps = {
    filterText: string,
    onClick: () => void
}

const FaBar = ({filterText, onClick}:FaBarProps) => {
    return (
        <div className={'fa-bar'} onClick={onClick}>
            <span>{filterText}</span>
        </div>
    );
};

export default FaBar;