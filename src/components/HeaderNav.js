import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from './images/websiteLogo.png'

import { BiMap } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'

function HeaderNav({ isSignedIn }) {
  return (
    <div className='headerNav'>
        <div id='iconLeft'>
            <a href='/map'>
                <BiMap className='headerIcons'/>
            </a>
        </div>
        <div id='logoMiddle'>
            <a href='/'>
                <img id='navbarLogo' src={Logo} alt='logo'/>
            </a>
        </div>
        <div id='iconRight'>
            {isSignedIn ?
            <NavLink to='/profile'>
                <CgProfile className='headerIcons'/>
            </NavLink>
            :
            <NavLink to='/login'>
                <CgProfile className='headerIcons'/>
            </NavLink>
            }
        </div>
    </div>
  )
}

export default HeaderNav