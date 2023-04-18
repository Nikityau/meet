import React from 'react';

import {dataCompilation} from "../model/data";

import Category from "features/category";

const CompilationBlock = () => {
    return (
        <div className={'compilation-block'}>
            {
                dataCompilation.map(el => (
                    <Category key={el.id} title={el.title}/>
                ))
            }
        </div>
    );
};

export default CompilationBlock;