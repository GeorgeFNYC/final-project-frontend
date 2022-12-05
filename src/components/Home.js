import React from 'react'
import HeaderNav from './HeaderNav'

function Home({ isSignedIn }) {
  return (
    <>
      <h1>Home Page</h1>
      <HeaderNav isSignedIn={isSignedIn} />
      <div>
        <a href='/arms'>Arms</a>
      </div>
      <div>
        <a href='/chest'>Chest</a>
      </div>
      <div>
        <a href='/abs'>Abs</a>
      </div>
      <div>
        <a href='/arms'>Legs</a>
      </div>
    </>
  )
}

export default Home