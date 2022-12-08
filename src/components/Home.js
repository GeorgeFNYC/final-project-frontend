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
        <h1>Yes, you should workout</h1>
      </div>
      <div id='bodyPartContainer'>
        <motion.div initial={{ y: 45, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 0.8} }} id='armDiv'>
          <a href='/arms'>
            <img className='bodyImages' src={Arm} alt='arm'/>
            <div className='icons'><TbBarbell /></div>
            <div className='text'>Arm</div>
          </a>
        </motion.div>
        <motion.div initial={{ y: 45, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1} }} id='chestDiv'>
          <a href='/chest'>
            <img className='bodyImages' src={Chest} alt='chest'/>
          </a>
        </motion.div>
        <motion.div initial={{ y: 45, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.2} }} id='absDiv'>
          <a href='/abs'>
            <img className='bodyImages' src={Abs} alt='abs'/>
          </a>
        </motion.div>
        <motion.div initial={{ y: 45, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.4} }} id='legDiv'>
          <a href='/legs'>
            <img className='bodyImages' src={Leg} alt='leg'/>
          </a>
        </motion.div>
      </div>
      
    </>
  )
}

export default Home