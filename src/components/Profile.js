import React from 'react'

import HeaderNav from './HeaderNav'

function Profile({ signOut }) {
  return (
    <>
      <HeaderNav />
      <div>Hello</div>
      <button onClick={signOut}>Sign Out</button>
    </>
  )
}

export default Profile