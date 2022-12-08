import React from 'react'

import HeaderNav from './HeaderNav'

function NewProfile({ signOut }) {
  return (
    <>
        <HeaderNav />
        <div className='currentUserProfile'>
        <div className='headerProfile'>
          <h1></h1>
        </div>
        <div className='repsBlock'>
          <p>Reps, short for repetitions, are the action of one complete strength training exercise, like one biceps curl. Sets are how many reps you do in a row between periods of rest. By using reps and sets to guide your strength workouts, you can pinpoint and achieve your fitness goals with more control.</p>
        </div>
        <div className='letsAddText'>
          <p>Let's start adding some workouts!</p>
        </div>
        <div className='miniNav'>
        <ul id='profileUL'>
            <a className='profileLinks' href='/arms'>
              <li className='profileLI'>Arms</li>
            </a>
            <a className='profileLinks' href='/chest'>
              <li className='profileLI'>Chest</li>
            </a>
            <a className='profileLinks' href='/abs'>
              <li className='profileLI'>Abs</li>
            </a>
            <a className='profileLinks' href='/legs'>
              <li className='profileLI'>Legs</li>
            </a>
          </ul>
        </div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </>
  )
}

export default NewProfile