import React from 'react';

import NextBtn from "./next-btn";

import {IsRender} from "../helpers/is-render";

import {CreateEventController} from "../controller/create-event.controller";

const Creating = () => {
    return (
        <div className={'creating-post'}>
            <div className={'create-post__steps'}>
                {
                    CreateEventController.GET().getStagesEvent().map(stages => (
                        <IsRender
                            key={stages.id}
                            Component={
                                stages.renderNode
                            }
                            uniqueName={stages.uniqueName}
                        />
                    ))
                }

            </div>
            <div className={'create-post__btn'}>
                <NextBtn/>
            </div>
        </div>
    );
};

export default Creating;