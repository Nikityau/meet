import React from 'react';

type PathPointerProps = {
    offset: number
}

const PathPointer = ({offset}: PathPointerProps) => {
    return (
        <div className={'path-pointer'}
            style={{
                transform: `translate(${offset}px, 0)`
            }}
        >
        </div>
    );
};

export default PathPointer;