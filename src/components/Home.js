import React from 'react'
import HeaderNav from './HeaderNav'

function Home({ isSignedIn }) {
  return (
    <>
    <HeaderNav isSignedIn={isSignedIn} />

    <div className='websiteQuestion'>
      <h1>Website question</h1>
    </div>
    <div id='partContainer'>
      <div id='armDiv'>
        <a href='/'>Arm</a>
      </div>
      <div id='chestDiv'>
        <a href='/'>Chest</a>
      </div>
      <div id='stomachDiv'>
        <a href='/'>Stomach</a>
      </div>
      <div id='legDiv'>
        <a href='/'>Leg</a>
      </div>
    </div>
  </>
  )
}

export default Home