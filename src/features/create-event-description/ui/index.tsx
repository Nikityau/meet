import React, {useCallback, useEffect, useState} from 'react';
import {convertFromRaw, convertToRaw, Editor, EditorState} from 'draft-js'

import 'draft-js/dist/Draft.css';
import '../style/index.scss'

import {useCreateEvent} from "pages/create-post/helpers/hooks/useCreateEvent";
import {EventObject} from "pages/create-post/controller/type/type";
import {CreateDescriptionService} from "pages/create-post/service/create-description.service";

import {WhiteBack} from "entities/white-back";

const CreateEventDescription = () => {

    const {status, dispatch} = useCreateEvent<EventObject>('description', new CreateDescriptionService())
    const [description, setDescription] = useState(() => {
        const ls = JSON.parse(localStorage.getItem('content-state'))
        if(ls) {
            return EditorState.createWithContent(convertFromRaw(ls))
        }


        return EditorState.createEmpty()
    })

    useEffect(() => {
        createTextString()
    }, [description])

    const createTextString = () => {
        const jsRaw = convertToRaw(description.getCurrentContent())
        console.log('editor', jsRaw)

        let textString = ""

        if(jsRaw.blocks.length == 1 && jsRaw.blocks[0].text.length == 0) {
            textString = ""
        } else {
            for(let i in jsRaw.blocks) {
                textString += jsRaw.blocks[i].text + "\n"
            }
        }

        textString = textString.substring(0, textString.length - 1)

        dispatch(textString)
        localStorage.setItem('content-state', JSON.stringify(jsRaw))
    }

    return (
        <WhiteBack>
            <div className={'create-event-description'}>
                <div className={'create-event-description__work-zone'}>
                    <Editor
                        editorState={description}
                        onChange={setDescription}
                        placeholder={'Описание....'}
                    />
                    <div className={'create-event-description__line'}>
                    </div>
                </div>
            </div>
        </WhiteBack>
    );
};

export default CreateEventDescription;