import React from 'react';

import {stagesComp} from "../model/stages";

import {CreateEventStage} from "entities/create-event-stage";

import CreateTitle from "./create-title";
import CreatePostBtn from "./create-post-btn";
import {IsRender} from "../helpers/is-render";

const Creating = () => {
    return (
        <div className={'creating-post'}>
            <div className={'create-post__steps'}>
                {
                    stagesComp.map(stage => (
                        <IsRender
                            key={stage.id}
                            Component={
                                <CreateEventStage
                                    number={stage.number}
                                    Component={
                                        stage.Element
                                    }
                                />
                            }
                            number={stage.number}
                        />
                    ))
                }
            </div>
            <div className={'create-post__btn'}>
                <CreatePostBtn/>
            </div>
        </div>
    );
};

export default Creating;