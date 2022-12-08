import React from 'react'

import HeaderNav from './HeaderNav'

function Profile({ signOut }) {

  return (
    <>
      <HeaderNav />
      <div className='currentUserProfile'>
        <div className='headerProfile'>
          <h1>Welcome back</h1>
        </div>
        <div className='completedWorkout'>
          <div className=''>

          </div>
        </div>
        <div className='letsAddText'>
          <p>Let's add some more workouts!</p>
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

export default Profile