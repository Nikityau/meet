import React from 'react';

import {dataCompilation} from "../model/data";

import Compilation from "./compilation";
const CompilationBlock = () => {
    return (
        <div className={'compilation-block'}>
            {
                dataCompilation.map(el => (
                    <Compilation key={el.id} title={el.title}/>
                ))
            }
        </div>
    );
};

export default CompilationBlock;