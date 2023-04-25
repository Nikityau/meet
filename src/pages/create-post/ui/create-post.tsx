import React from 'react';

import Tabs from "./tabs";
import Area from "./area";

import Wrapper from "../provider/wrapper";

import '../style/index.scss'

const CreatePost = () => {
    return (
        <Wrapper>
            <div className={'create-post-page'}>
                <Tabs/>
                <Area/>
            </div>
        </Wrapper>
    );
};

export default CreatePost;