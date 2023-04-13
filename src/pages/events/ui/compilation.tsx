import React from 'react';

type CompilationProps = {
    title: string
}

const Compilation = ({title}:CompilationProps) => {
    return (
        <div className={'compilation'}>
            <span>{title}</span>
        </div>
    );
};

export default Compilation;