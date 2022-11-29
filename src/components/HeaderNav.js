import React from 'react'
import { BiMap } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'

function HeaderNav() {
  return (
    <div className='headerNav'>
        <div id='iconLeft'>
            <a href='/map'>
                <BiMap className='headerIcons'/>
            </a>
        </div>
        <div id='logoMiddle'>
            <img src='https://via.placeholder.com/280' alt='logo'/>
        </div>
        <div id='iconRight'>
            <a href='/profile'>
                <CgProfile className='headerIcons'/>
            </a>
        </div>
    </div>
  )
}

export default HeaderNav