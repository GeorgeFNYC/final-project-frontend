import React from 'react'

import HeaderNav from './HeaderNav'

function Profile({ signOut, currentUser }) {
  console.log(currentUser)
  return (
    <>
      <HeaderNav />
      <h1>Profile Page</h1>
      <button onClick={signOut}>Sign Out</button>
    </>
  )
}

export default Profile