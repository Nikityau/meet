import React from 'react';
import UserInfo from "./user-info";
import EditBlock from "./edit-block";
import Button from "../../../shared/ui/button/button";
const InfoEditor = () => {

    const onSave = () => {

    }

    return (
        <div className={'settings-profile-edit'}>
           <div className={'settings-profile-edit__container'}>
               <UserInfo/>
               <EditBlock/>
               <div className={'settings-profile-edit__btn-wrapper'}>
                   <Button
                       theme={'grey'}
                       children={
                           <span>Сохранить</span>
                       }
                       onClick={onSave}
                   />
               </div>
           </div>
        </div>
    );
};

export default InfoEditor;