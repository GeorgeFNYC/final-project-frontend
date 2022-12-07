import React from 'react'

import Arm from './images/arm.png'
import Chest from './images/chest.png'
import Abs from './images/abs.png'
import Leg from './images/leg.png'
import HeaderNav from './HeaderNav'

function Home({ isSignedIn }) {
  return (
    <>
      <HeaderNav isSignedIn={isSignedIn} />
      <div className='headerQuestion'>
        <h1>Yes, you should workout</h1>
      </div>
      <div id='bodyPartContainer'>
        <div id='armDiv'>
          <a href='/arms'>
            <img className='bodyIcons' src={Arm} alt='arm'/>
            <p>Arm Workouts</p>
          </a>
        </div>
        <div id='chestDiv'>
          <a href='/chest'>
            <img className='bodyIcons' src={Chest} alt='chest'/>
            <p>Chest Workouts</p>
          </a>
        </div>
        <div id='absDiv'>
          <a href='/abs'>
            <img className='bodyIcons' src={Abs} alt='abs'/>
            <p>Ab Workouts</p>
          </a>
        </div>
        <div id='legDiv'>
          <a href='/legs'>
            <img className='bodyIcons' src={Leg} alt='leg'/>
            <p>Leg Workouts</p>
          </a>
        </div>
      </div>
      
    </>
  )
}

export default Home