import React, {useEffect, useRef, useState} from 'react';
import {debounce, fromEvent, timer} from "rxjs";

import search_icon from './assets/search-icon.png'

import './style/search.scss'

const Search = () => {

    const input = useRef<HTMLInputElement>()

    useEffect(() => {
        const subscriber = fromEvent(input.current, 'input')
            .pipe(
                debounce(() => timer(300))
            ).subscribe(changeInput)

        return () => {
            subscriber.unsubscribe()
        }
    }, [])

    const changeInput = () => {
        console.log('input change')
    }

    return (
        <div className={'search'}>
            <input
                ref={input}
                className={'search__input'}
                type={'text'}
                placeholder={'Поиск'}
            />
        </div>
    );
};

export default Search;