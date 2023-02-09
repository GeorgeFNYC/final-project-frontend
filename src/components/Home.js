import React from 'react'

import { motion } from 'framer-motion';
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
        <motion.div initial={{ y: 60, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} id='armDiv'>
          <a href='/arms'>
            <img className='bodyImages' src={Arm} alt='arm'/>
            <div className='text'>Arms</div>
          </a>
        </motion.div>
        <motion.div initial={{ y: 70, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.9} }} id='chestDiv'>
          <a href='/chest'>
            <img className='bodyImages' src={Chest} alt='chest'/>
            <div className='text'>Chest</div>
          </a>
        </motion.div>
        <motion.div initial={{ y: 80, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 2.1} }} id='absDiv'>
          <a href='/abs'>
            <img className='bodyImages' src={Abs} alt='abs'/>
            <div className='text'>Abs</div>
          </a>
        </motion.div>
        <motion.div initial={{ y: 90, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 2.3} }}  id='legDiv'>
          <a href='/legs'>
            <img className='bodyImages' src={Leg} alt='leg'/>
            <div className='text'>Legs</div>
          </a>
        </motion.div>
      </div>
    </>
  )
}

export default Home