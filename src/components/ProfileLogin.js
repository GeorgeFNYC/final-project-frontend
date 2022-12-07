import React, { useState } from 'react'

import Login from './Login'
import Signup from './Signup'

function ProfileLogin() {

    const [hideForum, setHideForum] = useState(false)

  return (
    <div className='loginContainer'>
        
        <h2>Should I workout today?</h2>
        <Login />
            
        <Signup />
            <button>Have an account?</button>
    </div>
  )
}

export default ProfileLogin