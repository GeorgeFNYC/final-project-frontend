import React from 'react'

import {motion} from 'framer-motion'
import { TbBarbell } from "react-icons/tb";

import Arm from './images/arm.jpg'
import Chest from './images/chest.jpg'
import Abs from './images/abs.jpg'
import Leg from './images/leg.jpg'
import HeaderNav from './HeaderNav'

function Home({ isSignedIn }) {
  return (
    <>
      <HeaderNav isSignedIn={isSignedIn} />
      <div className='headerQuestion'>
      </div>
      <div id='bodyPartContainer'>
        <div id='armDiv'>
          <a href='/arms'>
            <img className='bodyImages' src={Arm} alt='arm'/>
          </a>
        </div>
        <div id='chestDiv'>
          <a href='/chest'>
            <img className='bodyImages' src={Chest} alt='chest'/>
            <div className='text'>Chest</div>
          </a>
        </div>
        <div id='absDiv'>
          <a href='/abs'>
            <img className='bodyImages' src={Abs} alt='abs'/>
            <div className='text'>Abs</div>
          </a>
        </div>
        <div id='legDiv'>
          <a href='/legs'>
            <img className='bodyImages' src={Leg} alt='leg'/>
            <div className='text'>Legs</div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Home