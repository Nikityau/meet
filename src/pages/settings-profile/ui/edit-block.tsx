import React from 'react';
import TextEdit from "./text-edit";
import {useSelector} from "react-redux";
import TitleWrapper from "./title-wrapper";
import Select from "../../../widgets/select";
import DateSelect from "./date-select";
import {userSelector} from "../../../redux/user-store/user-selector";

const EditBlock = () => {
    const user = useSelector(userSelector)

    const onNameChange = (name: string) => {

    }

    const onSurnameChange = (surname: string) => {

    }

    return (
        <div className={'profile-edit-block'}>
            <TitleWrapper title={'Имя'}>
                <TextEdit
                    initText={user?.name}
                    onChange={onNameChange}
                />
            </TitleWrapper>
            <TitleWrapper title={'Фамилия'}>
                <TextEdit
                    initText={user?.surname}
                    onChange={onSurnameChange}
                />
            </TitleWrapper>
            <TitleWrapper title={'Пол'}>
                <Select
                    onChange={() => {

                    }}
                    init={'Женский'}
                    options={
                    [
                        'Женский',
                        'Мужской'
                    ]
                }
                    width={'auto'}
                />
            </TitleWrapper>
            <TitleWrapper title={'Дата рождения'}>
                <DateSelect/>
            </TitleWrapper>
        </div>
    );
};

export default EditBlock;