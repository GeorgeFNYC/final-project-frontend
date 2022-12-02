import React from 'react'
import HeaderNav from './HeaderNav'

function Home({ isSignedIn }) {
  return (
    <>
      <h1>Home Page</h1>
      <HeaderNav isSignedIn={isSignedIn} />
      <a href='/arms'>Arms</a>
    </>
  )
}

export default Home