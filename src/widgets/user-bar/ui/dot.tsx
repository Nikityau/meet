import React, {useContext } from 'react'
import cn from 'classnames'

import crs from '../assets/crosshair.png'
import {UserBarContext} from "../provider/context";

const Dot3 = () => {

  const cntx = useContext(UserBarContext)

  return (
    <div className={cn('user-circle__ux', cntx.isOpen ? 
    'user-circle__ux_crs' : 
    'user-circle__ux_dots'
    )}>
        <div className='user-circle__dots'>
            <div className='user-circle__dot'></div>
            <div className='user-circle__dot'></div>
            <div className='user-circle__dot'></div>
        </div>
        <div className='user-circle__crosshair'>
          <img src={crs}/>
        </div>
    </div>
  )
}

export default Dot3