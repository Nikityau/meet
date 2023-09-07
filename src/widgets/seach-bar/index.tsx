import React from 'react'

import Magnifier from './ui/magnifier'

import './style/index.scss'
import {isMobile} from "react-device-detect";

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <input type={'text'} placeholder={isMobile ? '' : '...'}/>
        <div className='search-bar__magnifier'>
          <Magnifier/>
        </div>
    </div>
  )
}

export default SearchBar