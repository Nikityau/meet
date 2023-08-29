import React from 'react';
import {settingsNav} from "../data/nav-data";
import NavBtn from "./nav-btn";

const Navigation = () => {
    return (
        <div className={'settings-navigation'}>
            {
                settingsNav.map(d => (
                    <NavBtn
                        key={d.id}
                        icon={d.icon}
                        name={d.name}
                        link={d.link}
                    />
                ))
            }
        </div>
    );
};

export default Navigation;