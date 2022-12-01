import React from 'react'
import HeaderNav from './HeaderNav'

function Home({ isSignedIn }) {
  function handleClick() {
  }
  return (
    <HeaderNav isSignedIn={isSignedIn} />

  )
}

export default Home