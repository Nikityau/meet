import React from 'react';

type SettingsBlockBoilerplateProps = {
    title: string
} & React.PropsWithChildren

const SettingsBlockBoilerplate = ({title, children}:SettingsBlockBoilerplateProps) => {
    return (
        <div className={'stgs-bb'}>
            <div className={'stgs-bb__title'}>

            </div>
        </div>
    );
};

export default SettingsBlockBoilerplate;