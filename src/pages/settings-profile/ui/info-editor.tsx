import React from 'react';
import UserInfo from "./user-info";
import EditBlock from "./edit-block";
const InfoEditor = () => {
    return (
        <div className={'settings-profile-edit'}>
           <div className={'settings-profile-edit__container'}>
               <UserInfo/>
               <EditBlock/>
           </div>
        </div>
    );
};

export default InfoEditor;