import React, {useState} from 'react';
import {debounce} from "../../../shared/helpers/debounce";

type TextEditProps = {
    initText: string,
    onChange: (text: string) => void
}

const TextEdit = ({onChange, initText}:TextEditProps) => {

    const [state, setState] = useState<string>(initText)

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
        debounce(() => {
            onChange(e.target.value)
        }, 2000)
    }

    return (
        <div className={'text-edit'}>
            <input value={state} onChange={onTextChange}/>
        </div>
    );
};

export default TextEdit;