import React from 'react';

import {stagesComp} from "../model/stages";

import {CreateEventStage} from "entities/create-event-stage";
import CreateTitle from "./create-title";

const Creating = () => {
    return (
        <div className={'creating-post'}>
            <div className={'create-post__steps'}>
                {
                    stagesComp.map(stage => (
                        <CreateEventStage
                            key={stage.id}
                            number={stage.number}
                            Component={
                                <CreateTitle/>
                            }
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Creating;