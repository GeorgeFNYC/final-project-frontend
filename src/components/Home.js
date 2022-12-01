import React from 'react'
import HeaderNav from './HeaderNav'

function Home({ isSignedIn }) {
  return (
    <HeaderNav isSignedIn={isSignedIn} />
  )
}

export default Home