import React from 'react';


import './style/index.scss'

type CreationStageProps = {
    Numbering: React.ReactNode,
    Title: React.ReactNode,
    CreateZone: React.ReactNode
}

const CreationStage: React.FC<CreationStageProps> = (
    {
        Numbering,
        CreateZone,
        Title
    }
) => {
    return (
        <div className={'creation-stage'}>
            <div className={'creation-stage__numbering'}>
                {
                    Numbering
                }
            </div>
            <div className={'creation-stage__create-zone'}>
                <div className={'creation-stage__title'}>
                    {
                        Title
                    }
                </div>
                {
                    CreateZone
                }
            </div>
        </div>
    );
};

export default CreationStage;