import React from 'react'

import Magnifier from './ui/magnifier'

import './style/index.scss'

const SearchBar = () => {

  

  return (
    <div className='search-bar'>
        <input type={'text'} placeholder='Request...'/>
        <div className='search-bar__magnifier'>
          <Magnifier/>
        </div>
    </div>
  )
}

export default SearchBar